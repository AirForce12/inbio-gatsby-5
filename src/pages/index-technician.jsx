import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Footer from "@layout/footer/layout-01";
import HeaderImage from "@containers/header-image/layout-01";
import Bio from "@containers/bio/layout-01";
import About from "@containers/about/layout-01";
import Service from "@containers/service/layout-02";
import Client from "@containers/client/layout-02";
import Resume from "@containers/resume/layout-02";
import Skill from "@containers/skill/layout-04";
import Portfolio from "@containers/portfolio/layout-02";
import Blog from "@containers/blog/layout-02";
import Contact from "@containers/contact/layout-02";
import Sticky from "@ui/sticky";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";

const IndexTechnicianPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout
            pageTitle="Home Technician"
            color={2}
            className="technician-home"
        >
            <main className="main-page-wrapper">
                <HeaderImage data={content["header-image-section"]} />
                <div className="rn-content-wrapper">
                    <div className="container">
                        <Bio
                            data={{
                                ...content["bio-section"],
                                socials: data.site.siteMetadata.socials,
                            }}
                        />
                        <TabContainer
                            defaultActiveKey={content["about-section"].id}
                        >
                            <div className="row mt--40 tab-content-wrapper">
                                <div className="col-lg-2">
                                    <div className="d-flex flex-wrap align-content-start h-100 w-100">
                                        <Sticky className="w-100" top="25px">
                                            <Nav
                                                as="ul"
                                                className="tab-navigation-button tab-smlg flex-column nav-pills me-3"
                                            >
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        eventKey={
                                                            content[
                                                                "about-section"
                                                            ].id
                                                        }
                                                        className="rn-nav"
                                                    >
                                                        About
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        eventKey={
                                                            content[
                                                                "resume-section"
                                                            ].id
                                                        }
                                                        className="rn-nav"
                                                    >
                                                        Resume
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        eventKey={
                                                            content[
                                                                "portfolio-section"
                                                            ].id
                                                        }
                                                        className="rn-nav"
                                                    >
                                                        Work
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        eventKey={
                                                            content[
                                                                "blog-section"
                                                            ].id
                                                        }
                                                        className="rn-nav"
                                                    >
                                                        Blog
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        className="rn-nav"
                                                        eventKey={
                                                            content[
                                                                "contact-section"
                                                            ].id
                                                        }
                                                    >
                                                        Contact
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Sticky>
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <TabContent>
                                        <TabPane
                                            eventKey={
                                                content["about-section"].id
                                            }
                                        >
                                            <div
                                                id="about"
                                                className="rn-about-area"
                                            >
                                                <div className="container">
                                                    <About
                                                        data={
                                                            content[
                                                                "about-section"
                                                            ]
                                                        }
                                                    />
                                                    <Service
                                                        data={
                                                            content[
                                                                "service-section"
                                                            ]
                                                        }
                                                    />
                                                    <Client
                                                        data={
                                                            content[
                                                                "client-section"
                                                            ]
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane
                                            eventKey={
                                                content["resume-section"].id
                                            }
                                        >
                                            <Resume
                                                data={content["resume-section"]}
                                            />
                                            <Skill
                                                data={content["skill-section"]}
                                            />
                                        </TabPane>
                                        <TabPane
                                            eventKey={
                                                content["portfolio-section"].id
                                            }
                                        >
                                            <Portfolio
                                                data={
                                                    content["portfolio-section"]
                                                }
                                            />
                                        </TabPane>
                                        <TabPane
                                            eventKey={
                                                content["blog-section"].id
                                            }
                                        >
                                            <Blog
                                                data={{
                                                    blogs: data?.allArticle
                                                        ?.nodes,
                                                }}
                                            />
                                        </TabPane>
                                        <TabPane
                                            eventKey={
                                                content["contact-section"].id
                                            }
                                        >
                                            <Contact
                                                data={{
                                                    ...content[
                                                        "contact-section"
                                                    ],
                                                    socials:
                                                        data.site.siteMetadata
                                                            .socials,
                                                    phone: data.site
                                                        .siteMetadata?.contact
                                                        ?.phone,
                                                    email: data.site
                                                        .siteMetadata?.contact
                                                        ?.email,
                                                    getform_url:
                                                        data.site.siteMetadata
                                                            ?.getform_url,
                                                }}
                                            />
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </TabContainer>
                    </div>
                </div>
            </main>
            <Footer data={{ ...data.footer }} />
        </Layout>
    );
};

export const query = graphql`
    query TechnicianPageQuery {
        site {
            ...Site
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "technician-home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 6) {
            nodes {
                ...Article
            }
        }
    }
`;

IndexTechnicianPage.propTypes = {
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

export default IndexTechnicianPage;
