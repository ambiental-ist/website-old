import React from "react"
import PropTypes from "prop-types"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES} from '@contentful/rich-text-types';


const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='pb-5'>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_4]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_5]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_6]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className='list-disc pl-8'>{children}</ul>,
    [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} className='font-bold'>{children}</a>,
  }
};

const RichText = ({ text }) => {

  return (
    <div className="mt-4 leading-loose text-gray-800">
        {renderRichText(text, options)}
    </div>
  )

}

RichText.propTypes = {
  text: PropTypes.node.isRequired,
}

export default RichText
