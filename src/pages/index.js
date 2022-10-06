import React from 'react';
import Flickity from 'react-flickity-component';
import Page from '../containers/Page';
import TypingEffect from '../components/typing-effect';
import ContactForm from '../components/contact-form/ContactForm';
import Tag from '../components/Tag';
import { ScrollListener } from '../components/ScrollListener';
import CarouselSlide from '../components/carousel-slide';
import BlobSection from '../components/blob-section';
import PortfolioSection from '../components/portfolio-section';
import CircleImage from '../components/circle-image';

export default function IndexPage() {
  return (
    <Page>
      {/* Hero */}
      <div className="grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:gap-0 bg-white border-b mt-20">
        <div className="px-8 md:pl-0 md:pr-8">
          <div className="ml-auto md:max-w-xl py-12 md:pl-16 md:py-32">
            <h1 className="text-4xl md:text-3xl lg:text-4xl">
              Let's build something
            </h1>
            <div className="relative nudge-left pt-2">
              <TypingEffect
                className="text-6xl md:text-5xl lg:text-6xl leading-none relative font-bold"
                text={[
                  'SOLID',
                  'FAST',
                  'AMAZING',
                  'TOGETHER',
                ]}
                speed={100}
                typingDelay={1000}
                eraseDelay={1200}
              />
            </div>
            <p className="text-xl py-8">
              A full-stack web-development consultancy for
              Node.js services and React applications.
            </p>
            <a
              type="button"
              className="primary-button text-xl font-bold antialiased"
              href="#contact"
            >
              Contact us
            </a>
          </div>
        </div>
        <div
          className="computer-background bg-center bg-cover"
          aria-label="Image of woman at coffee shop on laptop"
        />
      </div>
      {/* Services */}
      <div
        id="services"
        className="bg-offwhite text-left sm:text-center py-24 px-8 curved-bottom"
      >
        <h2>Services</h2>
        <p className="text-xl max-w-lg mx-auto pt-4">
          Studio Lagier focuses on all areas of a project's
          life-cycle. We're passionate about building
          Javascript applications and bringing ambitious
          ideas to life.
        </p>
        <ScrollListener
          className="max-w-3xl pt-8 mx-auto text-left sm:text-center slide-in"
          triggeredClassName="animation-triggered"
        >
          <Tag icon="nodejs">
            Full-stack Javascript apps
          </Tag>
          <Tag icon="react">
            React, React Native, and NextJS
          </Tag>
          <Tag icon="money">Landing pages</Tag>
          <Tag icon="interface">Admin interfaces</Tag>
          <Tag icon="database">Schema design</Tag>
          <Tag icon="clock">
            Frontend performance tuning
          </Tag>
          <Tag icon="chat">Real-time infrastructure</Tag>
          <Tag icon="chart">Data visualization</Tag>
          <Tag icon="report">Architecture audits</Tag>
          <Tag icon="alert">
            Analytics and logging solutions
          </Tag>
        </ScrollListener>
      </div>
      {/* Portfolio */}
      <div
        id="portfolio"
        className="text-left sm:text-center px-8 py-24"
      >
        <h2>Our past work</h2>
        <div className="max-w-6xl mx-auto">
          <PortfolioSection
            title="Orchid Health patient reports"
            img="/images/portfolio/orchid.jpg"
            alt="Screenshot of Orchid Health patient reports"
            link="https://www.orchidhealth.com/"
            linkText="See the portal"
          >
            Orchid Health needed beautiful, handcrafted
            patient reports including custom charts and
            interactive graphs to display sensitive
            information about patient and embryo health.
            This was a deep data visualization project using
            React, Next.js and D3 to create a thoughtful
            experience optimized for mobile. These reports
            are the foundation of Orchid's early product
            launch and are helping parents make fertility
            decisions today.
          </PortfolioSection>
          <PortfolioSection
            title="StackInfluence technical leadership"
            img="/images/portfolio/stackinfluence.jpg"
            alt="Screenshot of StackInfluence website"
            link="https://stackinfluence.com/"
            linkText="Check them out"
            swap
          >
            We have worked closely with StackInfluence as
            they have grown their operation from a series of
            Excel spreadsheets to a full-fledged SaaS
            platform. We have helped them build out their
            infrastructure, develop their product, and scale
            their team. Our partnership has allowed them to
            massively scale both sides of their marketplace
            and has been a key part of their success in
            securing two rounds of funding and approaching
            profitability.
          </PortfolioSection>
          <PortfolioSection
            title="Worklete React Native app"
            img="/images/portfolio/worklete.jpg"
            alt="Screenshot of Worklete React Native app"
            link="https://www.worklete.com/"
            linkText="Have a look"
          >
            We helped Worklete evolve their React Native app
            past the MVP stage to scale beyond their initial
            trial customers to a large new cohort. By adding
            support for dynamic notifications and complex
            course flows, we powered them through a
            successful launch.
          </PortfolioSection>
          <PortfolioSection
            swap
            title="Scalero email ingest"
            img="/images/portfolio/scalero.jpg"
            alt="Screenshot of Scalero website"
            link="https://scalero.io/"
            linkText="Take a peek"
          >
            We performed several services for the folks at
            Scalero. We sanitized and secured a WordPress
            install after a security breach and moved them
            to a properly-scaled service on AWS. We also
            worked to help them ingest thousands of new
            email templates and hundreds of thousands of
            existing variables from a large new client of
            theirs - our script did in an hour what would
            have taken them weeks by hand.
          </PortfolioSection>
          <PortfolioSection
            title="HeapViz memory leak detection tool"
            img="/images/portfolio/heapviz.jpg"
            alt="Screenshot of HeapViz website"
            link="https://heapviz.com/"
            linkText="Try it now"
          >
            We built the HeapViz tool from the ground up.
            HeapViz is a visualization engine for Chrome
            memory profiles. You can follow our development
            through our blog posts. Chrome heap profiles are
            very large, and we needed to use all of the
            performance-enhancing tools at our disposal to
            effectively render them, including WebGL,
            WebAssembly, and WebWorkers. It now powers a
            portion of the PM2 memory profiler.
          </PortfolioSection>
        </div>
      </div>
      {/* Quotes */}
      <BlobSection
        id="quotes"
        className="text-left sm:text-center text-white pt-24 pb-16 px-8 md:px-0 curved-both"
      >
        <h2>What people are saying</h2>
        <Flickity
          className="py-16 highlight-selected"
          static
          options={{
            imagesLoaded: true,
            wrapAround: true,
            pageDots: false,
            adaptiveHeight: false,
          }}
        >
          <CarouselSlide
            img="/images/faces/brant-portrait.jpg"
            alt="Drawn portrait of Brant Cebulla"
            tagline="I loved working with Studio Lagier"
            text="Tom found a more efficient way
            to tackle our scraping project than we had originally spec'd, and he
            was honest and transparent about his process."
            title="Brant, Scalero cofounder"
          />
          <CarouselSlide
            img="/images/faces/ayor-portrait.jpg"
            alt="Headshot of Ayor Abushawashi"
            tagline="Tom transformed our backend"
            text="Tom was able to migrate our application to a new database, build an analytics platform, and refactor our back-end to be faster and easier to work with. He's the real deal."
            title="Ayor, StackInfluence CTO"
          />
          {/* <CarouselSlide
            img="/images/faces/alison-portrait.jpg"
            alt="Headshot of Alison Cebulla"
            tagline="I loved working with Studio Lagier"
            text="Lorem ipsum blah etc"
            title="Alison, ACESConnection community facilitator"
          /> */}
        </Flickity>
      </BlobSection>
      {/* About */}
      <div
        id="about"
        className="text-left sm:text-center px-8 py-24"
      >
        <h2 className="pb-8">Who are we?</h2>
        <p className="text-xl max-w-2xl mx-auto pb-8">
          Hi! I'm{' '}
          <a
            href="https://www.linkedin.com/in/tomlagier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tom
          </a>{' '}
          - my wife{' '}
          <a
            href="https://www.linkedin.com/in/mary-lagier-952b0864/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mary
          </a>{' '}
          and our dog Bandit are the team behind Studio
          Lagier. I used to work at Google, Mary was at
          Reflektive, and before that we worked at several
          startups, digital, and creative agencies. Combined
          we have almost two decades of full-stack
          development experience.
        </p>
        <p>
          Mary's focus is on{' '}
          <a href="https://marylagier.com/">
            photography and creative
          </a>
          , and I take care of the technical side.
        </p>
        <p className="text-xl max-w-2xl mx-auto">
          We're in sunny San Luis Obispo, California - when
          we're not working on client projects, you can
          catch us hiking, surfing, or just enjoying the
          view.
        </p>
        <ScrollListener className="inline-block text-center mx-auto pt-20 pb-4 ">
          <CircleImage
            className="build-1"
            src="/images/faces/mary-portrait.jpg"
            alt="Portrait of Mary"
          />
          <CircleImage
            className="build-15"
            src="/images/faces/tom-portrait.jpg"
            alt="Portrait of Tom"
          />
          <CircleImage
            className="build-2"
            src="/images/faces/bandit-portrait.jpg"
            alt="Portrait of our black Lab, Bandit"
          />
        </ScrollListener>
      </div>
      {/* Contact form */}
      <div
        className="bg-dark px-8 py-24 curved-top"
        id="contact"
      >
        <h2 className="text-white text-left sm:text-center antialiased">
          Get in touch
        </h2>
        <p className="text-white text-xl text-left sm:text-center max-w-md mx-auto pt-4">
          Let's talk about your project. Leave some details
          and we'll get right back to you.
        </p>
        <ScrollListener
          className="slide-up"
          triggeredClassName="animation-triggered"
        >
          <ContactForm className="mt-12" />
        </ScrollListener>
      </div>
    </Page>
  );
}
