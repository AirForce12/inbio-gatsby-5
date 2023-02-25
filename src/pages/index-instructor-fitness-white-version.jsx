import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-12";
import AboutArea from "@containers/about/layout-02";
import ServicesArea from "@containers/service/layout-01";
import ParallaxArea from "@containers/parallax";
import PortfolioArea from "@containers/portfolio/layout-06";
import ClientArea from "@containers/client/layout-03";
import TestimonialArea from "@containers/testimonial/layout-03";
import PricingArea from "@containers/pricing/layout-02";
import BlogArea from "@containers/blog/layout-01";
import ContactArea from "@containers/contact/layout-01";

const IndexFitnessInstructorPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout
            pageTitle="Home Instructor Yoga"
            className="home-classic white-version"
        >
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea data={content["hero-section"]} />
                <AboutArea data={content["about-section"]} />
                <ServicesArea id="service" data={content["service-section"]} />
                <ParallaxArea data={content["parallax-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
                <ClientArea data={content["client-section"]} />
                <TestimonialArea data={content["testimonial-section"]} />
                <PricingArea data={content["pricing-section"]} />
                <BlogArea
                    data={{
                        ...content["blog-section"],
                        blogs: data?.allArticle?.nodes,
                    }}
                />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                />
            </main>
            <Footer
                className="section-separator"
                data={{
                    ...data.footer,
                    socials: data.site.siteMetadata.socials,
                }}
            />
        </Layout>
    );
};

export const query = graphql`
    query FitnessInstructorWhitePageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-4" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-5" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-2" }) {
            ...Footer02
        }
        homePage(title: { eq: "instructor-fitness-home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

IndexFitnessInstructorPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default IndexFitnessInstructorPage;
