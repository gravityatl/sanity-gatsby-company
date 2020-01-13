import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlockContent from '../components/block-content'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    sanityHomeContent(_id: {regex: ""}) {
      headline
      _rawBody
      mainImage {
        asset {
          _id
        }
        alt
      }
    }
   
    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <div class='homemainwrap'>
          <div class='homemain'>
            <h1 hidden>Welcome to {site.title}</h1>
            <h1>{data.sanityHomeContent.headline}</h1>
            <div>
              {data.sanityHomeContent._rawBody && <BlockContent blocks={data.sanityHomeContent._rawBody || []} />}
            </div>
          </div>
          <div class='homemainside'>

            <img
              src={imageUrlFor(buildImageObj(data.sanityHomeContent.mainImage))
                .width(300)
                .height(Math.floor((9 / 16) * 300))
                .fit('crop')
                .format('webp')
                .url()}
              alt={data.sanityHomeContent.mainImage.alt}
            />

          </div>
        </div>

        {postNodes && (
          <BlogPostPreviewGrid
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/blog/'
          />
        )}
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            browseMoreHref='/projects/'
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
