import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-05";
import ExperienceArea from "@containers/experience/layout-02";
import EducationArea from "@containers/education/layout-02";
import ResumeArea from "@containers/resume/layout-01";
import PortfolioArea from "@containers/portfolio/layout-04";
import BlogArea from "@containers/blog/layout-01";
import EducationTabArea from "@containers/education/layout-01";
import SkillArea from "@containers/skill/layout-01";
import ExperienceTabArea from "@containers/experience/layout-01";
import InterviewArea from "@containers/interview/layout-01";

const IndexDeveloperPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);
    return (
        <Layout pageTitle="Home Developer">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea data={content["hero-section"]} />
                <ExperienceArea data={content["experience-section"]} />
                <EducationArea data={content["education-section"]} />
                <ResumeArea data={content["resume-section"]}>
                    <EducationTabArea
                        data={content["education-resume-section"]}
                    />
                    <SkillArea data={content["skill-resume-section"]} />
                    <ExperienceTabArea
                        data={content["experience-resume-section"]}
                    />
                    <InterviewArea data={content["interview-resume-section"]} />
                </ResumeArea>
                <PortfolioArea data={content["portfolio-section"]} />
                <BlogArea
                    data={{
                        ...content["blog-section"],
                        blogs: data?.allArticle?.nodes,
                    }}
                />
            </main>
            <Footer
                data={{
                    ...data.footer,
                    socials: data.site.siteMetadata.socials,
                }}
            />
        </Layout>
    );
};

export const query = graphql`
    query DeveloperPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-3" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-2" }) {
            ...Footer02
        }
        homePage(title: { eq: "developer-home" }) {
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

IndexDeveloperPage.propTypes = {
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

export default IndexDeveloperPage;
