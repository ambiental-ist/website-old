import React from 'react'

import { FaInstagram } from "react-icons/fa"

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

const ShareButtons = ({titleWhatsApp, titleTwitter, url, instagramLink}) => {

    return(
        <div>
          <FacebookShareButton url={url} className='mr-4 md:mr-8'>
                <FacebookIcon  size={60} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={titleTwitter} className='mr-4 md:mr-8'>
                <TwitterIcon  size={60} round={true} />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={titleWhatsApp} className='mr-4 md:mr-8'>
               <WhatsappIcon  size={60} round={true}/>
          </WhatsappShareButton>

          <li className={'inline-block'}>
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <span className="sr-only">{"Instagram"}</span>
              <FaInstagram className="rounded-full text-white bg-purple-500 p-3 fill-current" style={{width: '60px', height: '60px'}}/>
            </a>
          </li>
          
        </div>
      )

}


export default ShareButtons