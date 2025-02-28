import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppNav } from "@/components/app-nav"
import App from "@/App"

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-1 flex-col gap-6 p-10 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">

        <div className="aspect-video rounded-xl bg-muted/50 flex flex-col justify-center items-center text-center p-4 space-y-5">
          <div className="peer group transition-all duration-500 hover:scale-110 peer-hover:scale-110 will-change-transform">
            <div className="text-[3vw]">
              0 Total Applications
            </div>
          </div>
          
          <hr className="w-2/3 border-t-2 border-gray-300 mb-1 block" />

          <div className="flex items-center text-[3vw] md:text-xl text-gray-600 space-x-5 mt-2">
            <div className="peer text-[1.5vw] transition-all duration-500 hover:scale-110 hover:scale-110 will-change-transform">
              0 Interviews
            </div>
            {/* <span className="h-5 w-[2px] bg-gray-400"></span> Vertical line */}
            <div className="peer text-[1.5vw] transition-all duration-500 hover:scale-110 hover:scale-110 will-change-transform">
              0 Offers
            </div>
          </div>

          </div>

        <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[75vh] flex-1 rounded-xl bg-muted/50" />
      </div>
    </div>
  )
}
