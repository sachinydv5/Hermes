import React from 'react'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col">
      <main className="flex-1">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 md:py-24">
          <div className="relative">
            <img
              src="404-16.svg"
              alt="404 illustration"
              className="object-contain w-full"
            />
          </div>
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">404, Page not founds</h1>
            <p className="mb-8 text-muted-foreground">
              Something went wrong. It&apos;s look that your requested could not be found.
              <br />
              It&apos;s look like the link is broken or the page is removed.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="default" className="gap-2"
              onClick={() => navigate(-1)}>
                <ArrowLeft className="h-4 w-4" />
                GO BACK
              </Button>
              <Button variant="outline" className="gap-2 border-[#FFE7D6] text-[#FCB857]">
              <Home className="h-4 w-4"/>
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