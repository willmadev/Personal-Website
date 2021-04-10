/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNodes, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        createNodeField({
            node,
            name: `slug`,
            value: `projects/${node.frontmatter.path}`,
        })

        let featuredImage = `../../static/${node.frontmatter.featuredImage}`
        createNodeField({
            node,
            name: `featuredImage`,
            value: featuredImage
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query{
            allMarkdownRemark{
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/projectTemplate.js`),
            context: {
                slug: node.fields.slug
            }
        })
    })
}