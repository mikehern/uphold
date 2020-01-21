import React from 'react'
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from './emoji'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <p className='is-size-4'>
            This website was handcrafted with plenty cups of{' '}
            <Emoji emoji='☕' />
          </p>
          <p className='is-size-4'>
            Description text with social media{' '}
            <a href={data.site.siteMetadata.gatsby}>Gatsby</a> +{' '}
            <a href={data.site.siteMetadata.bulma}>Bulma</a>
          </p>
          <article className='media center'>
            <span className='icon'>
              <a href={data.site.siteMetadata.twitter}>
                <FaTwitter size='fa-2x' color='blue' />
              </a>
            </span>
            &nbsp;
            <span className='icon'>
              <a href={data.site.siteMetadata.github}>
                <FaGithub size='fa-2x' color='black' />
              </a>
            </span>
            &nbsp;
            <span className='icon'>
              <a href={data.site.siteMetadata.medium}>
                <FaMedium size='fa-2x' color='green' />
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
          <p className='is-size-5'>
            Small footer text
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
