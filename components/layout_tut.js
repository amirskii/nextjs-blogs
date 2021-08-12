import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles2 from './layout.module.css'
import TutorailButtonBlue from './tutorial_button_blue'


export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div className=''>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link_to rel='preload'></link_to>
        <link as='font' crossorigin='' href='https://public.powrcdn.com/fonts/gordita/gordita-regular-webfont-woff.woff'
              rel='preload'/>
        <link as='font' crossorigin='' href='https://public.powrcdn.com/fonts/gordita/gordita-bold-webfont-woff.woff'
              rel='preload'/>
        <link as='font' crossorigin='' href='https://public.powrcdn.com/fonts/gordita/gordita-medium-webfont-woff.woff'
              rel='preload'/>
      </Head>

      <header
        className={styles2.header}
        >
        <div className="flex flex-col w-full max-w-full z-10">
          <div className="container max-w-[1140px] px-4 self-center">
            <div className="mt-3 md:mt-8">
              <a
                href="/"
                className="no-underline cursor-pointer box-border focus:underline hover:font-normal hover:no-underline"
              >
                <img
                  className="w-24 max-w-full not-italic leading-none normal-case align-middle border-0 box-border"
                  src="https://www.powrcdn.com/tutorial_pages_new_design/powr-logo.svg"
                />
              </a>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="max-w-[480px] mt-11 md:mt-20">
                <h1
                  className="font-gordita-bold text-h40 text-color7 font-bold tracking-normal box-border md:pr-32 lg:pr-0"
                >
                  Embed About Us
                  <span className="font-medium text-blue-500 box-border"> HTML </span>
                  plugin on Your Website
                </h1>

                <p
                  className="pr-16 mt-4 mb-14 text-lg text-color7 leading-8 box-border"
                >
                  Add a HTML About Us plugin to your website without coding or
                  headaches.
                </p>
                <TutorailButtonBlue>Start Free</TutorailButtonBlue>
              </div>
              
              <div
                className="mt-12 md:mt-0 relative px-4 lg:float-left md:w-10/12 lg:max-w-[700px] box-border"
              >
                <picture className="box-border">
                  <source
                    srcset="
                      https://www.powrcdn.com/tutorials/tutorials-section-1-tiny.webp
                    "
                    type="image/webp"
                    className="box-border"
                  />
                  <source
                    srcset="
                      https://www.powrcdn.com/tutorial_pages_new_design/tutorials-section-1-tiny.png
                    "
                    type="image/png"
                    className="box-border"
                  />
                  <img
                    alt="img_alt_about_us"
                    className="max-w-full align-middle border-0 box-border"
                    loading="lazy"
                    src="https://www.powrcdn.com/tutorial_pages_new_design/tutorials-section-1-tiny.png"
                  />
                </picture>
              </div>
            </div>

          </div>
        </div>

        <div className={styles2.headerbg}>
          <img
              alt="POWR white wave"
              className="w-full max-w-full mt-auto -mb-3 md:-mb-8 lg:-mb-10"
              src="https://www.powrcdn.com/tutorial_pages_new_design/wave-top.svg"
            />
        </div>
      </header>      
      <main>{children}</main>
    </div>
  )
}