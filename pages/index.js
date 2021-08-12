import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout_tut'
import TutorailParagraph from '../components/tutorial_paragraph'
import TutorailHeader20 from '../components/tutorial_header20'
import TutorailHeader24 from '../components/tutorial_header24'
import CenteredContainer from '../components/tutorial_centered_container'
import utilStyles from '../styles/utils.module.css'
import QuotedBox from '../components/tutorial_quote_box'
import BlueRoundedBox from '../components/tutorial_blue_rounded_box'
import TutorialFeature from '../components/tutorial_feature'
import TutorialPictureCentered from '../components/tutorial_picture_centered'
import TutorialPicture from '../components/tutorial_picture'
import TutorailHeader20White from '../components/tutorial_header20_white'
import TutorailButtonBlue from '../components/tutorial_button_blue'
import TutorailButtonWhite from '../components/tutorial_button_white'
import TutorailParagraph20 from '../components/tutorial_paragraph20'
import styles from '../components/layout.module.css'
import TutorailHeader26 from '../components/tutorial_header26'
import TestimonialFilled from '../components/TestimonialFilled'


export async function getStaticProps() {
  return {
    props: {
      platform: 'HTML'
    }
  }
}

export default function Home({ posts }) {
  const data = {
    platform: 'HTML',
    app_name: 'About Us',
    app_type: 'Plugin',
    testimonials: [
      {
        title: "Simple",
        text: "Easy to navigate for a non-tech person like me. Tried so many apps, and this is the best combination of great features for any shop.",
        author: "Pasar Segar | The Fresh Market on ",
        app: "Form Builder",
        link: "https://www.powr.io/plugins/form-builder/standalone",
        webp: "https://www.powrcdn.com/tutorials/testimonial-photo1.webp",
        png: "https://www.powrcdn.com/tutorial_pages_new_design/testimonial-photo1.png"
      }, {
        title: "This app was seamless",
        text: "It helped me get my website traffic to engage on more platforms! I would highly recommended to anyone!",
        author: "C.G. Harrison & Co on ",
        app: "Photo Gallery",
        link: "https://www.powr.io/plugins/instagram-feed/standalone",
        webp: "https://www.powrcdn.com/tutorials/testimonial-photo2.webp",
        png: "https://www.powrcdn.com/tutorial_pages_new_design/testimonial-photo2.png"
      }, {
        title: "I am really enjoying this app so far",
        text: "I was surprised that Shopify didn`t have a built in function for something like this, but glad your app fits the bill.",
        author: "UL Press on ",
        app: "Photo Gallery",
        link: "https://www.powr.io/plugins/photo-gallery/standalone",
        webp: "https://www.powrcdn.com/tutorials/testimonial-photo3.webp",
        png: "https://www.powrcdn.com/tutorial_pages_new_design/testimonial-photo3.png"
      }
    ]
  }

  return (
    <Layout>
      <section className="flex flex-col">
        <CenteredContainer className="pb-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <TutorailHeader24 className="mt-2 mb-4">
                If you’ve got your {data.platform} website up and running, you’ve overcome the
                first big challenge in building your businesses’ online presence.
                Congratulations!
              </TutorailHeader24>
              <TutorailParagraph className="mt-4 mb-2">
                But next comes a big question: how to attract, engage, convert, and
                support more visitors? With more HTML sites, and more businesses
                coming online than ever before, competition is fierce. At the same
                time, today's visitors are exposed to a whopping 5,000+ brand
                impressions every single day. How does your online business stand out
                from the crowd?
              </TutorailParagraph>
            </div>
            <div className="md:w-1/2 flex-shrink-0 md:flex relative justify-center px-4 min-w-64 box-border">
              <picture className="box-border mt-16">
                <source
                  srcset="https://www.powrcdn.com/tutorials/img1.webp"
                  type="image/webp"
                />
                <source
                  srcset="https://www.powrcdn.com/tutorials/img1.png"
                  type="image/png"
                />
                <img
                  alt="Add About Us to HTML"
                  className="mx-0 mt-4 mb-0 w-64 max-w-full align-middle border-0 box-border"
                  loading="lazy"
                  src="https://www.powrcdn.com/tutorials/img1.png"
                />
              </picture>
            </div>
          </div>
        </CenteredContainer>
      </section>

      <section className="flex flex-col">
        <CenteredContainer className="flex justify-center">
          <QuotedBox className="bg-color6-light">
            <p
              className="mx-0 mt-0 mb-2 text-xl leading-8 text-center text-color7"
            >
              Adding the {data.app_name} {data.app_type} is a time-tested method for
              <b className="font-gordita-medium" > increasing user engagement </b
              >
              and
              <b className="font-gordita-medium"> conversion</b>,
              and is often recommended by web professionals as a best practice
              for supercharging the {data.platform} site.
            </p>
          </QuotedBox>
        </CenteredContainer>
      </section>

      <section className="flex flex-col">
        <CenteredContainer className="mt-16 pb-10">
          <div className="flex flex-col md:flex-row">
            
            <div className="md:w-1/2 flex-shrink-0 md:flex relative justify-center px-4 min-w-64 box-border">
              <picture class="box-border">
                <source
                  srcset="https://www.powrcdn.com/tutorials/img2.webp"
                  type="image/webp"
                />
                <source
                  srcset="https://www.powrcdn.com/tutorials/img2.png"
                  type="image/png"
                />
                <img
                  alt={`Add ${data.app_name} to ${data.platform}`}
                  class="w-8/12 max-w-full align-middle border-0 box-border"
                  loading="lazy"
                  data-cfsrc="https://www.powrcdn.com/tutorials/img2.png"
                  src="https://www.powrcdn.com/tutorials/img2.png"
                />
              </picture>
            </div>          

            <div className="md:w-1/2">
              <TutorailHeader24 className="mt-2 mb-4">
                Some businesses first attempt a do-it-yourself (DIY) {data.platform} or have a “web guy” that claims he/she can build {data.platform} in 'no time'.
              </TutorailHeader24>
              <TutorailParagraph className="mt-4">
                Others attempt to find open source {data.app_name}s, or overseas companies that seem to offer {data.app_name}s on the super cheap. 
              </TutorailParagraph>
              <TutorailParagraph className="mt-6 mb-2">
                Unfortunately, apart from the upfront cost of these approaches, they often turn disastrous over time. For example, while the {data.app_name} might look ok on your computer, for visitors on a mobile device or different web browser, the {data.app_name} may appear unattractive, distorted, or even not appear at all.
              </TutorailParagraph>
            </div>

          </div>
        </CenteredContainer>
      </section>

      <section className="flex flex-col">
        <CenteredContainer className="mt-16 pb-40">
          <div className="flex flex-col md:flex-row">
            
            <div className="md:w-1/2">
              <TutorailHeader24 className="mt-2 mb-4">
                Additionally, customizing and updating the {data.app_name} requires yet more time, and is likely to cause new problems or bugs.
              </TutorailHeader24>
              <TutorailParagraph className="mt-4">
                As your company continues to grow, you are likely to run into problems of security, as hackers may attempt to exploit {data.app_name} security vulnerabilities. 
              </TutorailParagraph>
              <TutorailParagraph className="mt-6 mb-2">
                As site traffic grows, the increased load may cause issues in the {data.app_name} rendering. There’s nothing worse than a prominently placed {data.app_name} crashing just as your traffic skyrockets due to a successful campaign!
              </TutorailParagraph>
            </div>

            <div className="max-w-[300px] flex-shrink-0 flex justify-center px-4 min-w-64 box-border mx-auto">
              <picture className="box-border mt-16">
                <source
                  srcset="https://www.powrcdn.com/tutorials/img3.webp"
                  type="image/webp"
                />
                <source
                  srcset="https://www.powrcdn.com/tutorials/img3.png"
                  type="image/png"
                />
                <img
                  alt="Add About Us to HTML"
                  className="mx-0 mt-4 mb-0 max-w-[300px] max-w-full align-middle border-0 box-border"
                  loading="lazy"
                  src="https://www.powrcdn.com/tutorials/img3.png"
                />
              </picture>
            </div>
          </div>
        </CenteredContainer>
      </section>

      <section className="relative flex justify-center flex-col bg-color6">
        <CenteredContainer className="flex justify-center">
          <QuotedBox className="absolute -mt-16 z-10 top-0 bg-white">
            <p
              className="mx-0 mt-0 mb-2 text-xl leading-8 text-center text-color7"
            >
              As website technologies evolve, custom and homegrown {data.app_name} ’s will incur more <b className="font-gordita-medium"> time and cost</b> of bringing in your “web guy” to update your site and keep it working.
            </p>
          </QuotedBox>
        </CenteredContainer>
      </section>

      <section className="grid justify-items-center bg-color6">
        <CenteredContainer className="grid justify-items-center mt-72 md:mt-48 pb-20">
          <div className="flex flex-col">
            <div className="flex flex-col max-w-[770px] self-center">
              <TutorailHeader24>
                This is why most serious businesses opt for professional {data.platform} {data.app_name} solutions like POWR
              </TutorailHeader24>
              <TutorailParagraph className="mt-4">
                To begin, POWR {data.app_name} for {data.platform} offers an intuitive setup that can be done without code. The patented POWr Editor allows WYSIWYG (what you see is what you get) configuration, allowing you to make real-time {data.app_name} updates on your live {data.platform} page.
              </TutorailParagraph>
            </div>
            <div className="flex flex-col md:flex-row md:justify-evenly mt-16">
              <TutorialFeature 
                webp="https://www.powrcdn.com/tutorials/feature3.webp"
                png="https://www.powrcdn.com/tutorial_pages_new_design/feature3.png"
              >
                <TutorailHeader20>
                  Easily Customizable
                </TutorailHeader20>
                <TutorailParagraph className="px-4 mb-2">
                  Every detail like fonts, colors, borders, and spacing can be
                  customized to make your brand identity pop.
                </TutorailParagraph>
              </TutorialFeature>

              <TutorialFeature 
                webp="https://www.powrcdn.com/tutorials/feature2.webp"
                png="https://www.powrcdn.com/tutorial_pages_new_design/feature2.png"
              >
                <TutorailHeader20>
                  Mobile Responsive
                </TutorailHeader20>
                <TutorailParagraph className="px-4 mb-2">
                  Design is automatically responsive to look great on any mobile, tablet, or web browser.
                </TutorailParagraph>
              </TutorialFeature>

              <TutorialFeature 
                webp="https://www.powrcdn.com/tutorials/feature1.webp"
                png="https://www.powrcdn.com/tutorial_pages_new_design/feature1.png"
              >
                <TutorailHeader20>
                  No Coding Required
                </TutorailHeader20>
                <TutorailParagraph className="px-4 mb-2">
                Simply copy and paste to install your {data.platform} {data.app_name}
                </TutorailParagraph>
              </TutorialFeature>
            </div>
          </div>
          <TutorailButtonBlue className="mt-16">Start Free</TutorailButtonBlue>
        </CenteredContainer>
      </section>

      <section>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-color7 flex justify-center flex-col py-24">
            <TutorialPictureCentered
              webp="https://www.powrcdn.com/tutorials/support.webp"
              png="https://www.powrcdn.com/tutorial_pages_new_design/support.png"
              className="h-202 content-center"            
            />
            <TutorailHeader20White className="mt-8 mx-4 text-center">
              Because POWR is built for scale, it has the most advanced built-in security and high-volume capabilities available. 
            </TutorailHeader20White>
          </div>
          <div className="md:w-1/2 bg-orange-300 flex justify-center flex-col py-24">
            <TutorialPictureCentered
              webp="https://www.powrcdn.com/tutorials/security.webp"
              png="https://www.powrcdn.com/tutorial_pages_new_design/security.png"            
              className="h-202"            
            />
            <TutorailHeader20 className="mt-8 mx-4 text-center">
              And to top it off, customer support is available 24/7, as well as a rich knowledge base.
            </TutorailHeader20>
            <TutorailParagraph className="mt-2 mx-4 text-center">
              Furthermore, our team of expert engineers work night and day to keep POWR apps like your {data.platform} {data.app_type} working for you.
            </TutorailParagraph>
          </div>
        </div>
      </section>      

      <section>
        <div className="px-4 md:px-36 py-24">
          <div className="flex flex-col md:flex-row">

            <div className="md:w-1/2 flex justify-center flex-col">
              <TutorailHeader24 className="mt-8 mx-4 text-center">
                Embedding an {data.app_name} app onto your {data.platform} site has never been easier
              </TutorailHeader24>
              <TutorailParagraph className="mt-2">
                Create your customized {data.app_name} {data.platform} app, match your website's style and colors, and add {data.app_name} to your {data.platform} page, post, sidebar, footer, or wherever you like on your site.                
              </TutorailParagraph>
              
              <div className="mt-16 text-text40 text-color6-dark">
                01
              </div>
              <div className="font-gordita-medium mt-1 text-xl leading-8 text-color7">
                Create your About Us
              </div>
              <div
                className="ml-6 mt-1 h-8 w-1 bg-color6-dark rounded"
              />
              <div className="mt-1 text-text40 text-color6-dark">
                02
              </div>
              <div className="font-gordita-medium mt-1 text-xl leading-8 text-color7">
                Copy Instagram Feed embed snippet
              </div>
              <div
                className="ml-6 mt-1 h-8 w-1 bg-color6-dark rounded"
                />
              <div className="mt-1 text-text40 text-color6-dark">
                03
              </div>
              <div className="font-gordita-medium mt-1 text-xl leading-8 text-color7">
                Paste the snippet into your {data.platform} website or template
              </div>

            </div>
            <div className="md:w-1/2 flex flex-col">
              <img
                class="pt-20 w-[250px] lg:ml-16 hidden md:block"
                src="https://www.powrcdn.com/tutorial_pages_new_design/arrow.svg"
              />
              <div class="mt-16 md:mt-6 aspect-w-16 aspect-h-9">
                <iframe
                  allowfullscreen="true"
                  allowscriptaccess="always"
                  frameborder="0"
                  loading="lazy"
                  src="https://www.youtube.com/embed/etmYiuHktmQ?autoplay=0"
                  title="YouTube video player"
                />
              </div>
            </div>
          </div>
        </div>
      </section>   

      <section className="flex flex-col">
        <CenteredContainer>
          <BlueRoundedBox className="bg-blue">
            <div className="flex flex-col md:flex-row content-center items-center">
              <p className="font-gordita-medium text-2xl leading-9 text-center text-white">
                Most importantly, POWR {data.app_name} has proven results. Case studies have shown POWR {data.app_name} to <span className="text-indigo-600">boost conversions over 30%!</span> 
              </p>
              <TutorailButtonWhite className="mt-8 md:ml-4">Start Free</TutorailButtonWhite>
            </div>
          </BlueRoundedBox>
        </CenteredContainer>
      </section>           
      
      <section className="flex flex-col">
        <CenteredContainer className="">
            <div className="py-24 flex flex-col items-center">
            <TutorailHeader24>
              Trusted by Millions
            </TutorailHeader24>
            <TutorailParagraph20 className="mt-4">
              We deliver quality, with over 12,387 reviews to prove it.
            </TutorailParagraph20>
          </div>
        </CenteredContainer>
      </section>           

      <section className="hidden md:block">
          <div className="flex flex-row justify-around">
            <div className="flex-col w-1/3 mr-40">
              <TutorailHeader26 className="text-center">
                1,200,348
              </TutorailHeader26>
              <p
                class="font-gordita-medium tracking-wider leading-5 text-center text-color1 uppercase box-border"
              >
                {data.app_name} Installations
              </p>
            </div>
            <div className="flex-col w-1/3 ml-40">
              <TutorailHeader26 className="text-center">
                8,230,145
              </TutorailHeader26>
              <p
                class="font-gordita-medium tracking-wider leading-5 text-center text-color1 uppercase box-border"
              >
                POWR PLUGINS ON WEBSITES
              </p>
            </div>
          </div>
      </section> 

      <section className="flex flex-col">
        <div className={`${styles.globebg} w-full relative`}>
          <img
            class="w-full"
            src="https://www.powrcdn.com/tutorial_pages_new_design/wave1-bottom_3.svg"
          />
          <div className="absolute top-0 w-full grid items-center justify-center">          
            <img
              class="hidden md:block -mt-24 w-[970px]"
              src="https://www.powrcdn.com/tutorial_pages_new_design/globe.png"
            />
            <div className="flex flex-col" >
              <div className="md:absolute md:top-[164px] left-[15%] mx-auto">
                <TestimonialFilled data={data.testimonials[0]}/>
              </div>
              <div className="mt-8 md:absolute md:top-[430px] md:left-[40%] mx-auto">
                <TestimonialFilled data={data.testimonials[1]}/>
              </div>
              <div className="mt-8 md:absolute md:top-[204px] md:right-[15%] mx-auto">
                <TestimonialFilled data={data.testimonials[2]}/>
              </div>
            </div>

          </div>
          <div className="h-[970px] md:h-[280px]">
          </div>
          <img
            class="z-0 w-full max-w-full "
            src="https://www.powrcdn.com/tutorial_pages_new_design/wave2-bottom.svg"
          />

        </div>
      </section>     

      <section className="flex flex-col">
        <CenteredContainer className="mt-32">
          <TutorailHeader24 className="md:max-w-[60%] mt-2 mb-4">
            If you still aren't sure, then take a look at what Rbia Shades, a sunglass company that makes handmade wooden frames, has been able to accomplish.
          </TutorailHeader24>
          <div className="flex flex-col md:flex-row mt-16">
            <div className="md:w-1/2 flex-col flex-shrink-0 flex justify-start">
              <TutorialPicture
                webp="https://www.powrcdn.com/tutorials/image-5.webp"
                png="https://www.powrcdn.com/tutorial_pages_new_design/image-5.png"
                className="md:min-h-[360px]"
              />
              <TutorailParagraph className="mt-4 md:mt-16">
                In a short time of signing up with POWR popup they were able to increase their contacts over 250% (over 600 real contacts) and have continuously grown their social media to over 6000 followers utilizing POWR social feed on their site. They added POWR Slider as a visual way to quickly show their customers as they are entering the homepage how the products look in real life. It showcases their products well and seamlessly gave customers a great on-site experience. In fact they found that visitors who interacted with POWR apps on their site were engaged 2.5 times longer than any other person on their site.
              </TutorailParagraph>
            </div>

            <div className="md:w-1/2 flex-col">
              <TutorailParagraph className="mt-4 md:mt-0 md:min-h-[360px]">
                A few months after launching their business at local fairs and craft shows, Rbia Shades was looking for a way to sell online. They needed to be able to show visitors the quality of their product, their lightweight and ergonomic designs, in a visually appealing way. Their html did not provide an adequate solution for this. They tried a few different solutions before finding POWR Slider and none of them appeared as if they were a part of the site, and were clunky and hard to use.
              </TutorailParagraph>
              <div className="mt-4 md:mt-16 flex justify-center md:justify-end">
                <TutorialPicture
                  webp="https://www.powrcdn.com/tutorials/image-7.webp"
                  png="https://www.powrcdn.com/tutorial_pages_new_design/image-7.png"
                />
              </div>
            </div>
          </div>
        </CenteredContainer>
      </section> 

      <section className="flex justify-center">
        <CenteredContainer>
          <div className="flex flex-col mt-16">
            <div className="flex flex-col md:flex-row md:justify-evenly">
              
              <div className="relative px-4 text-center box-border md:float-left md:w-1/3">
                <div class="box-border flex justify-center">
                  <img 
                    className="mb-4 h-12 max-w-full align-middle border-0"
                    src="https://www.powrcdn.com/tutorial_pages_new_design/vector-1.svg"
                  />
                </div>
                <TutorailHeader20 className="mt-4">
                  <span className="text-color1">250% growth</span> in contacts
                </TutorailHeader20>
              </div>

              <div className="relative px-4 text-center box-border md:float-left md:w-1/3">
                <div class="box-border flex justify-center">
                  <img 
                    className="mb-4 h-12 max-w-full align-middle border-0"
                    src="https://www.powrcdn.com/tutorial_pages_new_design/vector-2.svg"
                  />
                </div>
                <TutorailHeader20 className="mt-4">
                  Increase social media followers to<span className="text-color1"> over 6,000</span>
                </TutorailHeader20>
              </div>

              <div className="relative px-4 text-center box-border md:float-left md:w-1/3">
                <div class="box-border flex justify-center">
                  <img 
                    className="mb-4 h-12 max-w-full align-middle border-0"
                    src="https://www.powrcdn.com/tutorial_pages_new_design/vector.svg"
                  />
                </div>
                <TutorailHeader20 className="mt-4">
                  Visitors spent <span className="text-color1">2.5x longer</span>  on their site
                </TutorailHeader20>
              </div>

            </div>
          </div>
        </CenteredContainer>
      </section>


    </Layout>
  )
}