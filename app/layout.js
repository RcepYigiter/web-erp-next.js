
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import ReduxProvider from "@/store/provider/provider";
import Header from "@/components/layout/Header";
import ModulMenu from "@/components/layout/ModulMenu";
import NavigationBar from "@/components/layout/NavigationBar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});



const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Web Erp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body  >
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="/css/plugins/iCheck/custom.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/ag-grid.css" />
        <link rel="stylesheet" href="/css/tree-view.css" />





        <ReduxProvider>
          <div id="wrapper" className="flex flex-col h-full overflow-hidden">
            <Header />
            <div id="page-wrapper" className="gray-bg w-full p-0 " style={{ minHeight: 'calc(100vh - 40px) !important' }}>
              <div className="wrapper wrapper-content w-full flex p-0 m-0" style={{ height: '100%' }}>
                <ModulMenu />
                <div className="flex flex-col w-full pl-20">
                  <div className="border-b-gray-50 ">
                    <NavigationBar />
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </ReduxProvider>





        <Script src="/js/jquery-3.1.1.min.js"></Script>
        <Script src="/js/popper.min.js"></Script>
        <Script src="/js/bootstrap.js"></Script>
        <Script src="/js/plugins/metisMenu/jquery.metisMenu.js"></Script>
        <Script src="/js/plugins/slimscroll/jquery.slimscroll.min.js"></Script>
        <Script src="/js/plugins/pace/pace.min.js"></Script>
        <Script src="/js/plugins/iCheck/icheck.min.js"></Script>
        <Script src="/js/inspinia.js"></Script>


      </body>
    </html >
  );
}
