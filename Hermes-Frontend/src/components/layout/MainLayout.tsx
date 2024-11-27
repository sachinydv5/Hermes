import Footer from "../common/Footer";
import Header from "../common/Header";

export function MainLayout({ children }: any) {
    return (<>
        <header>
            <Header />
        </header>
        <div className="min-h-screen">
            {children}
        </div>
        <footer className="mt-10">
            <Footer/>
        </footer>
    </>)
}

export default MainLayout;