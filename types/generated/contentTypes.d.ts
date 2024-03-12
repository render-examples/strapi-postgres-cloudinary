import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApartmentApartment extends Schema.CollectionType {
  collectionName: 'apartments';
  info: {
    singularName: 'apartment';
    pluralName: 'apartments';
    displayName: 'Apartment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Description_c: Attribute.Text;
    Number_of_Rooms__c: Attribute.String;
    Apartment_image_galerry: Attribute.Media;
    Model_Code_Label__c: Attribute.String;
    sketch_image: Attribute.Media;
    Apartment_type__c: Attribute.String;
    Floor_numbers: Attribute.String;
    Total_Balcony_Sqm__c: Attribute.String;
    Apartment_sqm_c: Attribute.String;
    brand: Attribute.Relation<
      'api::apartment.apartment',
      'oneToOne',
      'api::brand.brand'
    >;
    building: Attribute.Relation<
      'api::apartment.apartment',
      'manyToOne',
      'api::building.building'
    >;
    Main_title: Attribute.String;
    Main_bold_title: Attribute.String;
    Extra_text_1: Attribute.String;
    Extra_text_2: Attribute.String;
    Extra_text_3: Attribute.String;
    Extra_text_4: Attribute.String;
    Extra_text_5: Attribute.String;
    Extra_long_text_1: Attribute.Text;
    Extra_long_text_2: Attribute.String;
    Extra_long_text_3: Attribute.Text;
    Extra_long_text_4: Attribute.Text;
    Extra_long_text_5: Attribute.Text;
    Extra_singel_media_1: Attribute.Media;
    Extra_singel_media_2: Attribute.Media;
    Extra_multipale_media_1: Attribute.Media;
    Extra_multipale_media_2: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::apartment.apartment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::apartment.apartment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: 'authors';
  info: {
    singularName: 'author';
    pluralName: 'authors';
    displayName: 'Author';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    avatar: Attribute.Media;
    email: Attribute.String;
    posts: Attribute.Relation<
      'api::author.author',
      'oneToMany',
      'api::post.post'
    >;
    post: Attribute.Relation<
      'api::author.author',
      'manyToOne',
      'api::post.post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: 'brand';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Brand_name: Attribute.String;
    Brand_Slogan: Attribute.String;
    City_c: Attribute.String;
    Brand_Type: Attribute.String;
    Hero_image: Attribute.Media;
    project_status: Attribute.String;
    Main_title: Attribute.String;
    Main_description: Attribute.Text;
    Main_featured_image: Attribute.Media;
    Secondary_featured_image: Attribute.Media;
    Main_logo: Attribute.Media;
    Surrounding_description: Attribute.Text;
    Surrounding_image_1: Attribute.Media;
    Surrounding_title_1: Attribute.String;
    Surrounding_image_2: Attribute.Media;
    Surrounding_title_2: Attribute.String;
    Surrounding_image_3: Attribute.Media;
    Surrounding_title_3: Attribute.String;
    Street__c: Attribute.String;
    Sidebar_logo: Attribute.Media;
    Main_title_bold: Attribute.String;
    rooms: Attribute.String;
    Apartment_section_title: Attribute.String;
    Apartment_section_title_bold: Attribute.String;
    Apartment_section_description: Attribute.Text;
    Extra_text_1: Attribute.String;
    Extra_text_2: Attribute.String;
    Extra_text_3: Attribute.String;
    Extra_text_4: Attribute.String;
    Extra_text_5: Attribute.String;
    Extra_long_text_1: Attribute.Text;
    Extra_long_text_2: Attribute.Text;
    Extra_long_text_3: Attribute.Text;
    Extra_long_text_4: Attribute.Text;
    Extra_long_text_5: Attribute.Text;
    Extra_singel_media_1: Attribute.Media;
    Extra_singel_media_2: Attribute.Media;
    Extra_multipale_media_1: Attribute.Media;
    Extra_multipale_media_2: Attribute.Media;
    Surrounding_title_regular: Attribute.String;
    Surrounding_title_bold: Attribute.String;
    building_type: Attribute.String;
    Number_of_buildings: Attribute.String;
    Number_of_floors: Attribute.String;
    Property_type: Attribute.String;
    Map_background: Attribute.Media;
    Map_adress: Attribute.String;
    Map_title_vector: Attribute.Media;
    Map_site_vector: Attribute.Media;
    Contact_us_image: Attribute.Media;
    Contact_us_title: Attribute.String;
    Contact_us_subtitle: Attribute.String;
    tags: Attribute.Relation<'api::brand.brand', 'oneToMany', 'api::tag.tag'>;
    tabs: Attribute.Relation<'api::brand.brand', 'oneToMany', 'api::tab.tab'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBuildingBuilding extends Schema.CollectionType {
  collectionName: 'buildings';
  info: {
    singularName: 'building';
    pluralName: 'buildings';
    displayName: 'building';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Building_name: Attribute.String;
    Building_status: Attribute.String;
    SF_id: Attribute.String;
    brand: Attribute.Relation<
      'api::building.building',
      'oneToOne',
      'api::brand.brand'
    >;
    apartments: Attribute.Relation<
      'api::building.building',
      'oneToMany',
      'api::apartment.apartment'
    >;
    Extra_text_1: Attribute.String;
    Extra_text_2: Attribute.String;
    Extra_long_text_1: Attribute.Text;
    Extra_long_text_2: Attribute.String;
    Extra_singel_media_1: Attribute.Media;
    Extra_singel_media_2: Attribute.Media;
    Extra_multipale_media_1: Attribute.Media;
    Extra_multipale_media_2: Attribute.Media;
    Progress_status_checked: Attribute.Media;
    Progress_status_uncheck: Attribute.Media;
    Progress_status_gray_line: Attribute.Media;
    Progress_status_green_line: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::building.building',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::building.building',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostPost extends Schema.CollectionType {
  collectionName: 'posts';
  info: {
    singularName: 'post';
    pluralName: 'posts';
    displayName: 'Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Article_title: Attribute.String;
    slug: Attribute.UID;
    category: Attribute.Text;
    tags: Attribute.Relation<'api::post.post', 'oneToMany', 'api::tag.tag'>;
    author: Attribute.Relation<
      'api::post.post',
      'manyToOne',
      'api::author.author'
    >;
    Publish_date: Attribute.String;
    Publisher_avatar: Attribute.Media;
    Featured_image: Attribute.Media;
    Excerpt: Attribute.String;
    Section_title: Attribute.String;
    First_paragraph: Attribute.Text;
    section_image: Attribute.Media;
    section_image_content: Attribute.String;
    section_image_alt: Attribute.String;
    section_image_description: Attribute.String;
    section_link_text: Attribute.String;
    section_link_url: Attribute.String;
    Section_title_2: Attribute.String;
    First_paragraph_2: Attribute.Text;
    section_image_2: Attribute.Media;
    section_image_content_2: Attribute.String;
    section_image_alt_2: Attribute.String;
    section_image_description_2: Attribute.String;
    section_link_text_2: Attribute.String;
    section_link_url_2: Attribute.String;
    Section_title_3: Attribute.String;
    First_paragraph_3: Attribute.Text;
    section_image_3: Attribute.Media;
    section_image_content_3: Attribute.String;
    section_image_alt_3: Attribute.String;
    section_image_description_3: Attribute.String;
    section_link_text_3: Attribute.String;
    section_link_url_3: Attribute.String;
    Section_title_4: Attribute.String;
    First_paragraph_4: Attribute.Text;
    section_image_4: Attribute.Media;
    section_image_content_4: Attribute.String;
    section_image_alt_4: Attribute.String;
    section_image_description_4: Attribute.String;
    section_link_text_4: Attribute.String;
    section_link_url_4: Attribute.String;
    Section_title_5: Attribute.String;
    First_paragraph_5: Attribute.Text;
    section_image_5: Attribute.Media;
    section_image_content_5: Attribute.String;
    section_image_alt_5: Attribute.String;
    section_image_description_5: Attribute.String;
    section_link_text_5: Attribute.String;
    section_link_url_5: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Brand_name: Attribute.String;
    Brand_Slogan: Attribute.String;
    City__c: Attribute.String;
    Brand_Type: Attribute.String;
    Hero_image: Attribute.Media;
    project_status: Attribute.String;
    Main_title: Attribute.String;
    Main_description: Attribute.Text;
    Main_featured_image: Attribute.Media;
    Secondary_featured_image: Attribute.Media;
    Main_logo: Attribute.Media;
    buildings: Attribute.String;
    floors: Attribute.String;
    Apartments: Attribute.String;
    rooms: Attribute.String;
    tab_name_a: Attribute.String;
    Tab_subtitle_a: Attribute.String;
    Tab_description_a: Attribute.Text;
    Tab_single_main_image: Attribute.Media;
    Tab_galery_a: Attribute.Media;
    Secondery_image_a: Attribute.Media;
    Tab_name_b: Attribute.String;
    featured_icon_1_b: Attribute.Media;
    featured_title_1_b: Attribute.String;
    featured_description_1_b: Attribute.Text;
    featured_icon_2_b: Attribute.Media;
    featured_title_2_b: Attribute.String;
    featured_description_2_b: Attribute.Text;
    featured_icon_3_b: Attribute.Media;
    featured_title_3_b: Attribute.String;
    featured_description_3_b: Attribute.Text;
    Tab_galery_b: Attribute.Media;
    tab_name_c: Attribute.String;
    Tab_description_c: Attribute.Text;
    Tab_main_image_c: Attribute.Media;
    Tab_secondery_image_c: Attribute.Media;
    Surrounding_description: Attribute.Text;
    Surrounding_image_1: Attribute.Media;
    Surrounding_title_1: Attribute.String;
    Surrounding_image_2: Attribute.Media;
    Surrounding_title_2: Attribute.String;
    Surrounding_image_3: Attribute.Media;
    Surrounding_title_3: Attribute.String;
    tags: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::tag.tag'
    >;
    Extra_text_1: Attribute.String;
    Extra_text_2: Attribute.String;
    Extra_text_3: Attribute.String;
    Extra_text_4: Attribute.String;
    Extra_text_5: Attribute.String;
    Extra_long_text_1: Attribute.Text;
    Extra_long_text_2: Attribute.Text;
    Extra_long_text_3: Attribute.Text;
    Extra_long_text_4: Attribute.Text;
    Extra_long_text_5: Attribute.Text;
    Extra_singel_media_1: Attribute.Media;
    Extra_singel_media_2: Attribute.Media;
    Extra_multipale_media_1: Attribute.Media;
    Extra_multipale_media_2: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShopShop extends Schema.CollectionType {
  collectionName: 'shops';
  info: {
    singularName: 'shop';
    pluralName: 'shops';
    displayName: 'Shop';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Shop_title: Attribute.String;
    Shop_phone: Attribute.String;
    Shop_logo: Attribute.Media;
    Shop_opening_hours: Attribute.String;
    Shop_closing_hours: Attribute.String;
    Shop_opening_hours_friday: Attribute.String;
    Shop_closing_hours_friday: Attribute.String;
    saturday_status: Attribute.Boolean;
    Shop_opening_hours_saturday: Attribute.String;
    Shop_closing_hours_saturday: Attribute.String;
    brand: Attribute.Relation<'api::shop.shop', 'oneToOne', 'api::brand.brand'>;
    Extra_multipale_media_1: Attribute.Media;
    Extra_single_media_1: Attribute.Media;
    Extra_text_1: Attribute.String;
    Extra_long_text_1: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::shop.shop', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::shop.shop', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTabTab extends Schema.CollectionType {
  collectionName: 'tabs';
  info: {
    singularName: 'tab';
    pluralName: 'tabs';
    displayName: 'Tab';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Tab_name_type_a: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_subtitle_a: Attribute.String;
    Tab_description_a: Attribute.Text;
    Tab_image: Attribute.Media;
    Tab_galery_a: Attribute.Media;
    Secondery_image_a: Attribute.Media;
    Tab_name_type_b: Attribute.String;
    Teatured_title_1_b: Attribute.String;
    Featured_description_1_b: Attribute.Text;
    Featured_icon_2_2_b: Attribute.Media;
    Featured_title_2_b: Attribute.String;
    Featured_description_2_b: Attribute.Text;
    Featured_icon_3_b: Attribute.Media;
    Featured_title_3_b: Attribute.String;
    Featured_description_3_b: Attribute.Text;
    Tab_galery_b: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_name_c: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_description_c: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_main_image_c: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_secondery_image_c: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_type_d: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tab_name_d: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_title_d: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_title_bold_d: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_subtitle_d: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_description_d: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Featured_image_d: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Featured_small_image_d: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_type_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_name_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_title_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_title_bold_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_subtitle_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_1_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_2_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_3_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_4_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_5_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_6_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_7_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_8_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_bollet_9_e: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Featured_image_e: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_type_f: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_name_f: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_subtitle_f: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_description_f: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_single_main_image_f: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tab_galery_f: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Secondery_image_f: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    brand: Attribute.Relation<'api::tab.tab', 'manyToOne', 'api::brand.brand'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tab.tab', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tab.tab', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::tab.tab',
      'oneToMany',
      'api::tab.tab'
    >;
    locale: Attribute.String;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    singularName: 'tag';
    pluralName: 'tags';
    displayName: 'tag';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tag: Attribute.String & Attribute.Required & Attribute.Unique;
    post: Attribute.Relation<'api::tag.tag', 'manyToOne', 'api::post.post'>;
    project: Attribute.Relation<
      'api::tag.tag',
      'manyToOne',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::apartment.apartment': ApiApartmentApartment;
      'api::author.author': ApiAuthorAuthor;
      'api::brand.brand': ApiBrandBrand;
      'api::building.building': ApiBuildingBuilding;
      'api::post.post': ApiPostPost;
      'api::project.project': ApiProjectProject;
      'api::shop.shop': ApiShopShop;
      'api::tab.tab': ApiTabTab;
      'api::tag.tag': ApiTagTag;
    }
  }
}
