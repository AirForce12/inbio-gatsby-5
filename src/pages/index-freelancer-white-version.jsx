import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import HeroArea from "@containers/hero/layout-10";
import AboutArea from "@containers/about/layout-03";
import SkillArea from "@containers/skill/layout-02";
import ServicesArea from "@containers/service/layout-05";
import PortfolioArea from "@containers/portfolio/layout-05";
import BlogArea from "@containers/blog/layout-03";
import TestimonialArea from "@containers/testimonial/layout-02";
import ContactArea from "@containers/contact/layout-03";

const IndexFreelencerPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);
    return (
        <Layout pageTitle="Home Freelencer" className="white-version">
            <main className="main-page-wrapper">
                <div className="rn-slider-area">
                    <div className="container">
                        <div className="row row--30 pt--100 pt_sm--50">
                            <div className="col-lg-6">
                                <HeroArea data={content["hero-section"]} />
                            </div>
                            <div className="col-lg-6">
                                <div className="sticky-home-wrapper">
                                    <AboutArea
                                        data={content["about-section"]}
                                    />
                                    <SkillArea
                                        data={content["skill-section"]}
                                    />
                                    <ServicesArea
                                        data={content["service-section"]}
                                    />
                                    <PortfolioArea
                                        data={content["portfolio-section"]}
                                    />
                                    <BlogArea
                                        data={{
                                            ...content["blog-section"],
                                            blogs: data?.allArticle?.nodes,
                                        }}
                                    />
                                    <TestimonialArea
                                        data={content["testimonial-section"]}
                                    />
                                    <ContactArea
                                        data={{
                                            getform_url:
                                                data.site.siteMetadata
                                                    ?.getform_url,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export const query = graphql`
    query FreelencerPageWhiteQuery {
        site {
            siteMetadata {
                getform_url
            }
        }
        homePage(title: { eq: "freelencer-home" }) {
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

IndexFreelencerPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default IndexFreelencerPage;
