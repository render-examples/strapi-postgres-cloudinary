import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponnentsPostContent extends Schema.Component {
  collectionName: 'components_componnents_post_contents';
  info: {
    displayName: 'Post_Content';
  };
  attributes: {
    Section_title: Attribute.String;
    First_paragraph: Attribute.String;
    section_image: Attribute.Media;
    section_link_text: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'componnents.post-content': ComponnentsPostContent;
    }
  }
}
