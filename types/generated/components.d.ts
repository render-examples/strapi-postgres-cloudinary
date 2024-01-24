import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponnentsComp1 extends Schema.Component {
  collectionName: 'components_componnents_comp1s';
  info: {
    displayName: 'comp1';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    media: Attribute.Media;
    markdown: Attribute.RichText;
  };
}

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

export interface ComponnentsTab1 extends Schema.Component {
  collectionName: 'components_componnents_tab_1s';
  info: {
    displayName: 'Tab 1';
    icon: 'alien';
    description: '';
  };
  attributes: {
    tab_name_type_a: Attribute.String;
    Tab_subtitle_a: Attribute.String;
    Tab_description_a: Attribute.Text;
    tab_image: Attribute.Media;
    Tab_galery_a: Attribute.Media;
    Secondery_image_a: Attribute.Media;
    brand: Attribute.Relation<
      'componnents.tab-1',
      'oneToOne',
      'api::brand.brand'
    >;
  };
}

export interface ComponnentsTab2 extends Schema.Component {
  collectionName: 'components_componnents_tab_2s';
  info: {
    displayName: 'Tab 2';
    icon: 'brush';
    description: '';
  };
  attributes: {
    tab_name_type_b: Attribute.String;
    featured_title_1_b: Attribute.String;
    featured_description_1_b: Attribute.Text;
    featured_icon_2_2_b: Attribute.Media;
    featured_title_2_b: Attribute.String;
    featured_description_2_b: Attribute.Text;
    featured_icon_3_b: Attribute.Media;
    featured_title_3_b: Attribute.String;
    featured_description_3_b: Attribute.String;
    Tab_galery_b: Attribute.Media;
    brand: Attribute.Relation<
      'componnents.tab-2',
      'oneToOne',
      'api::brand.brand'
    >;
  };
}

export interface ComponnentsTab3 extends Schema.Component {
  collectionName: 'components_componnents_tab_3s';
  info: {
    displayName: 'Tab 3';
    icon: 'moon';
    description: '';
  };
  attributes: {
    tab_name_c: Attribute.String;
    Tab_description_c: Attribute.String;
    Tab_main_image_c: Attribute.Media;
    Tab_secondery_image_c: Attribute.Media;
    brand: Attribute.Relation<
      'componnents.tab-3',
      'oneToOne',
      'api::brand.brand'
    >;
  };
}

export interface ComponnentsTab4 extends Schema.Component {
  collectionName: 'components_componnents_tab_4s';
  info: {
    displayName: 'Tab 4';
    icon: 'crown';
    description: '';
  };
  attributes: {
    tab_name_d: Attribute.String;
    tab_title_d: Attribute.String;
    tab_description_c: Attribute.Text;
    tab_main_image_c: Attribute.Media;
    tab_secondery_image_c: Attribute.Media;
    brand: Attribute.Relation<
      'componnents.tab-4',
      'oneToOne',
      'api::brand.brand'
    >;
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
      'componnents.comp1': ComponnentsComp1;
      'componnents.post-content': ComponnentsPostContent;
      'componnents.tab-1': ComponnentsTab1;
      'componnents.tab-2': ComponnentsTab2;
      'componnents.tab-3': ComponnentsTab3;
      'componnents.tab-4': ComponnentsTab4;
      'componnents.zone': ComponnentsZone;
    }
  }
}
