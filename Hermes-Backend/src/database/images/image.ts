import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';
import { getFirestoreApp, getFirebaseStorage } from '../firebase';


export const uploadImageToFirebase = async (
  fileBuffer: Buffer,
  originalName: string,
  mimeType: string
): Promise<string> => {
  try {
    const filename = `${uuidv4()}-${originalName}`;
    const file = getFirebaseStorage().file(filename);
    const token = uuidv4();

    const stream = file.createWriteStream({
      metadata: {
        contentType: mimeType,
        metadata: {
          firebaseStorageDownloadTokens: token,
        },
      },
    });

    stream.end(fileBuffer);

    await new Promise<void>((resolve, reject) => {
      stream.on('finish', resolve);
      stream.on('error', reject);
    });

    const url = `https://firebasestorage.googleapis.com/v0/b/${admin.storage().bucket().name}/o/${encodeURIComponent(filename)}?alt=media&token=${token}`;

    return url;
  } catch (err) {
    console.error('Firebase upload failed:', err);
    throw new Error('Image upload failed');
  }
};

