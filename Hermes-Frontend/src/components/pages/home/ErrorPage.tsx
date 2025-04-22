import React from 'react'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full  flex justify-center items-center flex-col bg-white">
    <main className="w-full">
      <div className="w-full flex flex-col items-center justify-center gap-8 px-4 py-16 md:py-24">
        <div className="w-full flex justify-center">
          <img
            src="404-16.svg"
            alt="404 illustration"
            className="w-full max-w-[400px] h-auto object-contain"

          />
        </div>
          <div className="text-center">
            <p className="mb-8 text-muted-foreground">
              Something went wrong. It&apos;s look that your requested could not be found.
              <br />
              It&apos;s look like the link is broken or the page is removed.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="default" className="gap-2 rounded-full text-xl"
              onClick={() => navigate(-1)}>
                <ArrowLeft className="h-6 w-6" />
                GO BACK
              </Button>
              <Button variant="outline" className="gap-2 text-xl border-[#FFE7D6] text-[#FCB857] rounded-full">
              <Home className="h-6 w-6"/>
               <Link to="/">
               GO TO HOME
               </Link> 
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ErrorPage