import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponnentsPostContent extends Schema.Component {
  collectionName: 'components_componnents_post_contents';
  info: {
    displayName: 'Post_Content';
    description: '';
  };
  attributes: {
    Section_title: Attribute.String;
    First_paragraph: Attribute.Text;
    section_image: Attribute.Media;
    section_link_text: Attribute.RichText;
  };
}

export interface ComponnentsZone extends Schema.Component {
  collectionName: 'components_componnents_zones';
  info: {
    displayName: 'Zone';
  };
  attributes: {
    text: Attribute.String;
    md: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'componnents.post-content': ComponnentsPostContent;
      'componnents.zone': ComponnentsZone;
    }
  }
}
