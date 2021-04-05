import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

const ShareButtons = ({titleWhatsApp, titleTwitter, url}) => {

    return(
        <div>
          <FacebookShareButton url={url} className='mr-8'>
                <FacebookIcon  size={60} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={titleTwitter} className='mr-8'>
                <TwitterIcon  size={60} round={true} />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={titleWhatsApp}>
               <WhatsappIcon  size={60} round={true}/>
           </WhatsappShareButton>
        </div>
      )

}
export default ShareButtons