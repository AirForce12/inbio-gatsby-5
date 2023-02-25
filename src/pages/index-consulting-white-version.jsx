import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-03-white";
import ServiceArea from "@containers/service/layout-04";
import PortfolioArea from "@containers/portfolio/layout-01";
import ResumeArea from "@containers/resume/layout-01";
import ClientArea from "@containers/client/layout-01";
import PricingArea from "@containers/pricing/layout-01";
import BlogArea from "@containers/blog/layout-01";
import ContactArea from "@containers/contact/layout-01";
import EducationArea from "@containers/education/layout-01";
import SkillArea from "@containers/skill/layout-01";
import ExperienceArea from "@containers/experience/layout-01";
import InterviewArea from "@containers/interview/layout-01";

const IndexConsultingPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout pageTitle="Home Consulting" className="white-version">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="page-wrapper-two">
                <HeroArea data={content["hero-section"]} />
                <ServiceArea data={content["service-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
                <ResumeArea data={content["resume-section"]}>
                    <EducationArea data={content["education-section"]} />
                    <SkillArea data={content["skill-section"]} />
                    <ExperienceArea data={content["experience-section"]} />
                    <InterviewArea data={content["interview-section"]} />
                </ResumeArea>
                <ClientArea data={content["client-section"]} />
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
                <Footer
                    data={{ ...data.footer }}
                    className="section-separator"
                />
            </main>
        </Layout>
    );
};

export const query = graphql`
    query ConsultingWhitePageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-2" }) {
            ...Header02
        }
        navigation: general(section: { eq: "menu-2" }) {
            menu {
                ...Menu02
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "consulting-home" }) {
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

IndexConsultingPage.propTypes = {
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

export default IndexConsultingPage;
