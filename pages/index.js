import Layout, { siteTitle } from '../components/layout_tut'
import TutorailParagraph from '../components/tutorial_paragraph'
import TutorailHeader20 from '../components/tutorial_header20'
import TutorailHeader24 from '../components/tutorial_header24'
import TutorailHeader32 from '../components/tutorial_header32'
import CenteredContainer from '../components/tutorial_centered_container'
import QuotedBox from '../components/tutorial_quote_box'
import BlueRoundedBox from '../components/tutorial_blue_rounded_box'
import TutorialFeature from '../components/tutorial_feature'
import TutorialPictureCentered from '../components/tutorial_picture_centered'
import TutorialPicture from '../components/tutorial_picture'
import TutorailHeader20White from '../components/tutorial_header20_white'
import TutorailButtonBlue from '../components/tutorial_button_blue'
import TutorailButtonWhite from '../components/tutorial_button_white'
import TutorailParagraph20 from '../components/tutorial_paragraph20'
import styles from '../styles/layout.module.css'
import TutorailHeader26 from '../components/tutorial_header26'
import TutorialAppBox from '../components/tutorial_app_box'
import TestimonialFilled from '../components/TestimonialFilled'
import BlueGrayRoundedBox from '../components/tutorial_blue-gray_rounded_box'
import tutorialData from '../data/data.js'
import TutorialAppBoxYellow from '../components/tutorial_app_box_yellow'
import TutorialMenu from '../components/tutorial_menu'


export async function getStaticProps() {
  return {
    props: {
      platform: 'HTML'
    }
  }
}

export default function Home({ posts }) {
  const data = tutorialData;

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
              
              <div className="mt-8 relative px-4 text-center box-border md:float-left md:w-1/3">
                <div class="box-border flex justify-center">
                  <img 
                    className="h-12 max-w-full align-middle border-0"
                    src="https://www.powrcdn.com/tutorial_pages_new_design/vector-1.svg"
                  />
                </div>
                <TutorailHeader20 className="mt-4">
                  <span className="text-color1">250% growth</span> in contacts
                </TutorailHeader20>
              </div>

              <div className="mt-8 relative px-4 text-center box-border md:float-left md:w-1/3">
                <div class="box-border flex justify-center">
                  <img 
                    className="h-12 max-w-full align-middle border-0"
                    src="https://www.powrcdn.com/tutorial_pages_new_design/vector-2.svg"
                  />
                </div>
                <TutorailHeader20 className="mt-4">
                  Increase social media followers to<span className="text-color1"> over 6,000</span>
                </TutorailHeader20>
              </div>

              <div className="mt-8 relative px-4 text-center box-border md:float-left md:w-1/3">
                <div class="box-border flex justify-center">
                  <img 
                    className="mb-4 h-12 max-w-full align-middle border-0"
                    src="https://www.powrcdn.com/tutorial_pages_new_design/vector.svg"
                  />
                </div>
                <TutorailHeader20 className="mt-4">
                  Visitors spent <span className="text-color1">2.5x longer</span> on their site
                </TutorailHeader20>
              </div>

            </div>
          </div>
        </CenteredContainer>
      </section>
      
      <section className="flex flex-col">
        <CenteredContainer>
          <BlueGrayRoundedBox className="mt-28">
            <div className="flex flex-col ontent-center items-center md:flex-row">
              <img 
                className="md:w-1/4"
                src="https://www.powrcdn.com/tutorial_pages_new_design/undraw.svg"
              />

              <div className="w-auto mt-8 md:ml-8 flex flex-col content-center items-center my-auto">
                <TutorailHeader20>
                  Do you {data.build[0]} sites for clients and charge hosting fees?
                </TutorailHeader20>
                <TutorailParagraph className="mt-4">
                  Then you'd be {data.happy[0]} to know agency users have 
                  <span class="text-color1"> reported 100% uptime </span>and
                  <span class="text-color1"> {data.tons[0]} of hours saved</span> every week with the ability to {data.create[0]} client apps in a matter of minutes. "
                </TutorailParagraph>
              </div>
            </div>
          </BlueGrayRoundedBox>
        </CenteredContainer>
      </section>           

      <section className="flex flex-col mt-24">
        <CenteredContainer className="max-w-[748px]">
          <TutorailHeader24 className="text-center">
            Just one POWR account gives you {data.accessTo[0]} every app in our {data.suite[0]}.
          </TutorailHeader24>
          <TutorailParagraph className="mt-4 text-center">
            {data.instantly[0]} use over 60 apps such as Social Media Feeds, Instagram Feeds, Pop Ups, Contact Form Builder, 
            Countdown Timers, FAQ Accordion, Gallery, Slideshows, Lookbook, and more for stellar landing page conversion and 
            customer service. POWR apps {data.integrate[0]} with many platforms such as Mail chimp, YouTube, Vimeo, Facebook, Instagram, Twitter, Pinterest, and more!
          </TutorailParagraph>
        </CenteredContainer>
      </section>           

      <section className="flex flex-col">
        <CenteredContainer className="mt-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:mr-4">
              <div className="border-t-4 border-blue-200 md:px-12 py-10 md:py-20">
                <TutorailHeader32>
                  Apps for Lead Generation
                </TutorailHeader32>
                <TutorailParagraph className="mt-4">
                  After you get visitors to your site it is {data.important[0]} to get their contact information. This is called lead collection. 
                  There are many POWR apps that can help you do this on your {data.platform} website, and the best part is you can {data.getStarted[0]} today for free. Let's take a look at the three most popular apps for lead generation.
                </TutorailParagraph>
              </div>
            </div>

            <div className="md:w-1/2 md:ml-4">
              <TutorialAppBox
                img="https://www.powrcdn.com/tutorial_pages_new_design/form-builder.svg"
                title={data.formBuilder.title}
                text={data.formBuilder.description}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-6 md:mt-8">
            <div className="md:w-1/2 md:mr-4">
              <TutorialAppBox
                img="https://www.powrcdn.com/tutorial_pages_new_design/popup.svg"
                title={data.popUp.title}
                text={data.popUp.description}
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-4 flex">
              <TutorialAppBox
                img="https://www.powrcdn.com/tutorial_pages_new_design/facebook-chat.svg"
                title={data.facebookChat.title}
                text={data.facebookChat.description}
              />
            </div>
          </div>
        </CenteredContainer>
      </section> 

      <section className="mt-16 flex justify-center">
        <TutorailHeader24 className="max-w-[940px] text-center">
          From a <span className="text-color1">250% {data.boost[0]} in new leads</span>, to 100% uptime for {data.customers[0]}, POWR Heroes have 
          seen {data.enourmous[0]} benefits. One even {data.stated[0]} that they <span className="text-color1">saved 50% of 
          their {data.setUp[0]} time</span>, that's hundreds of hours per year. 
          Another POWR Hero {data.stated[0]} consistent <span className="text-color1">growth on their {data.socialMedia[0]} by 200%.</span>
        </TutorailHeader24>
      </section>           

      <section className="flex flex-col">
        <CenteredContainer className="mt-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:mr-4">
              <div className="border-t-4 border-yellow-100 md:px-12 py-10 md:py-20">
                <TutorailHeader32>
                  Apps to Increase Conversions
                </TutorailHeader32>
                <TutorailParagraph className="mt-4">
                  Now that you've got leads, it's time to convert them into paying customers. There are many ways to do this and POWR can help you with several different apps to maximise conversion on you {data.platform} website. 
                </TutorailParagraph>
              </div>
            </div>

            <div className="md:w-1/2 md:ml-4">
              <TutorialAppBoxYellow
                img="https://www.powrcdn.com/tutorial_pages_new_design/countdown-timer.svg"
                title={data.countdownTimer.title}
                text={data.countdownTimer.description}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-6 md:mt-8">
            <div className="md:w-1/2 md:mr-4">
              <TutorialAppBoxYellow
                img="https://www.powrcdn.com/tutorial_pages_new_design/social-feed.svg"
                title={data.socialFeed.title}
                text={data.socialFeed.description}
              />
            </div>
            <div className="md:w-1/2 md:ml-4 flex mt-6 md:mt-0">
              <TutorialAppBoxYellow
                img="https://www.powrcdn.com/tutorial_pages_new_design/testimonial-slider.svg"
                title={data.testimonialSlider.title}
                text={data.testimonialSlider.description}
              />
            </div>
          </div>
        </CenteredContainer>
      </section> 

      <section className="mt-16 flex justify-center">
        <CenteredContainer className="flex-col items-center">
          <TutorailHeader24 className="max-w-[750px] mx-auto text-center">
            POWR will accelerate your growth with our all in one lead collection and conversion optimization tools. POWR is trusted on over 12 million websites worldwide
          </TutorailHeader24>
          
          <div className="flex flex-row justify-evenly mt-20 w-full">
            <img className="w-auto h-5 md:h-auto"  src="https://www.powrcdn.com/tutorial_pages_new_design/1.svg"/>
            <img className="w-auto h-5 md:h-auto"  src="https://www.powrcdn.com/tutorial_pages_new_design/2.svg"/>
            <img className="w-auto h-5 md:h-auto"  src="https://www.powrcdn.com/tutorial_pages_new_design/3.svg"/>
            <img className="hidden md:block md:w-auto md:h-auto"  src="https://www.powrcdn.com/tutorial_pages_new_design/4.svg"/>
          </div>

          <div className="flex flex-row justify-evenly mt-4 md:mt-20">
            <img className="w-auto h-5 md:hidden"  src="https://www.powrcdn.com/tutorial_pages_new_design/4.svg"/>
            <img className="w-auto h-5 md:h-auto" src="https://www.powrcdn.com/tutorial_pages_new_design/5.svg"/>
            <img className="w-auto h-5 md:h-auto" src="https://www.powrcdn.com/tutorial_pages_new_design/6.svg"/>
            <img className="hidden md:block md:w-auto md:h-auto" src="https://www.powrcdn.com/tutorial_pages_new_design/7.svg"/>
          </div>
          <div className="flex flex-row justify-evenly mt-4 md:mt-0 md:hidden">
            <img className="w-auto h-5" src="https://www.powrcdn.com/tutorial_pages_new_design/7.svg"/>
          </div>
          <TutorailButtonBlue className="hidden md:block mt-16 mx-auto">
            Start Free
          </TutorailButtonBlue>
        </CenteredContainer>
      </section>           

      <section className="mt-16">
        <div className={`${styles.globebg} flex justify-center w-full relative`}>
            <img
              className="w-full absolute top-0"
              src="https://www.powrcdn.com/tutorial_pages_new_design/wave1-bottom_3.svg"
            />
          <CenteredContainer className="mt-32 mb-36">
            <TutorailHeader32>
              About POWR
            </TutorailHeader32>
            <div className="flex flex-col md:flex-row mt-4">
              <div className="md:w-1/2">
                <TutorailParagraph className="max-w-[552px]">
                  Founded in 2014, POWR helps small businesses grow online with over 60 {data.platform} website apps {data.designed[0]} to 
                  collect more leads and {data.drive[0]} conversions. Our apps are easy-to-use, affordable, and seamless with our 
                  no code approach to getting POWR apps {data.up[0]} on your site in under 5 minutes. With forms of all 
                  kinds, including quote forms, {data.wholesale[0]} forms, contact forms, support forms, and more you can {data.give[0]} your website visitors an {data.easy[0]} way to get in touch. Popups to help {data.increase[0]} conversions and social feeds to help grow your audience online are some of our most popular apps. Testimonial sliders, comments, ratings, reviews, countdown timers, and every other POWR app is completely {data.customizable[0]}, and shareable both on your {data.platform} site and on your social media.             
                </TutorailParagraph>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <TutorialPictureCentered
                  webp="https://www.powrcdn.com/tutorials/team.webp"
                  png="https://www.powrcdn.com/tutorial_pages_new_design/team.png"
                />
              </div>
            </div>
            
          </CenteredContainer>
        </div>
      </section>           

      <section className="flex justify-center bg-color7 py-8">
        <CenteredContainer>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row justify-between md:w-1/2 md:mr-16">
              <TutorialMenu title={data.menu.main.title} items={data.menu.main.items}/>
              <TutorialMenu title={data.menu.main.title} items={data.menu.main.items}/>
            </div>
            <div className="flex flex-row md:w-1/2 justify-between mt-4 md:ml-16 md:mt-0">
              <TutorialMenu title={data.menu.main.title} items={data.menu.main.items}/>
              <TutorialMenu className title={data.menu.main.title} items={data.menu.main.items}/>
            </div>
          </div>
          <div className="text-color8 leading-6 mt-8">©2021 POWR. All rights reserved</div>
        </CenteredContainer>
      </section>      
    </Layout>
  )
}