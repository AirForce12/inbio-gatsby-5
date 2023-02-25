import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-14";
import PortfolioArea from "@containers/portfolio/layout-04";
import AwardsArea from "@containers/awards/layout-01";
import ParallaxArea from "@containers/parallax";
import PricingArea from "@containers/pricing/layout-02";
import ClientArea from "@containers/client/layout-03";
import ContactArea from "@containers/contact/layout-01";

const IndexDesignerPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout className="home-designer-two" pageTitle="Home Designer Two">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea data={content["hero-section"]} id="hello" />
                <PortfolioArea
                    data={content["portfolio-section"]}
                    separator={false}
                    id="design"
                />
                <PortfolioArea
                    data={content["photography-section"]}
                    id="photos"
                />
                <AwardsArea data={content["awards-section"]} />
                <ParallaxArea data={content["parallax-section"]} />
                <PricingArea data={content["pricing-section"]} id="pricing" />
                <ClientArea data={content["client-section"]} />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                    id="hire-me"
                />
            </main>
            <Footer data={{ ...data.footer }} className="section-separator" />
        </Layout>
    );
};

export const query = graphql`
    query DesignerPageTwoQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-7" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-8" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "designer-home-two" }) {
            content {
                ...Content01
            }
        }
    }
`;

IndexDesignerPage.propTypes = {
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
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default IndexDesignerPage;
