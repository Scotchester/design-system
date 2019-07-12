import CMS from '@cfpb/netlify-cms';

import { Preview as introPreview } from './widgets/intro/Preview';
import { Preview as slugPreview } from './widgets/slug/Preview';
import { Preview as sectionPreview } from './widgets/section/Preview';
import { Preview as statusPreview } from './widgets/status/Preview';
import { Preview as accessibilityPreview } from './widgets/accessibility/Preview';
import { Preview as researchPreview } from './widgets/research/Preview';
import { Preview as usagePreview } from './widgets/usage/Preview';
import { Preview as variationNamePreview } from './widgets/variation/NamePreview';
import { Preview as variationDescriptionPreview } from './widgets/variation/DescriptionPreview';
import { Preview as variationCodeSnippetPreview } from './widgets/variation/CodeSnippetPreview';
import { Preview as variationJinjaCodeSnippetPreview } from './widgets/variation/JinjaCodeSnippetPreview';
import { Preview as variationSpecsPreview } from './widgets/variation/SpecsPreview';
import { Preview as relatedItemsPreview } from './widgets/component/RelatedItemsPreview';
import { Preview as helpUsPreview } from './widgets/component/HelpUsPreview';
import { Preview as bodyPreview } from './widgets/body/Preview';
import { Preview as permalinkPreview } from './widgets/permalink/Preview';
import { Preview as navSectionPreview } from './widgets/navigation/sectionPreview';
import { Preview as navSecondaryPreview } from './widgets/navigation/secondaryPreview';
import { Preview as navTertiaryPreview } from './widgets/navigation/tertiaryPreview';
import { Preview as noPreview } from './widgets/noPreview';

CMS.registerWidget( 'introWidget', 'markdown', introPreview );
CMS.registerWidget( 'slugWidget', 'string', slugPreview );
CMS.registerWidget( 'sectionWidget', 'select', sectionPreview );
CMS.registerWidget( 'statusWidget', 'select', statusPreview );
CMS.registerWidget( 'accessibilityWidget', 'markdown', accessibilityPreview );
CMS.registerWidget( 'researchWidget', 'markdown', researchPreview );
CMS.registerWidget( 'usageWidget', 'markdown', usagePreview );
CMS.registerWidget( 'variationNameWidget', 'string', variationNamePreview );
CMS.registerWidget( 'variationDescriptionWidget', 'markdown', variationDescriptionPreview );
CMS.registerWidget( 'variationCodeSnippetWidget', 'text', variationCodeSnippetPreview );
CMS.registerWidget( 'variationJinjaCodeSnippetWidget', 'markdown', variationJinjaCodeSnippetPreview );
CMS.registerWidget( 'variationSpecsWidget', 'markdown', variationSpecsPreview );
CMS.registerWidget( 'relatedItemsWidget', 'markdown', relatedItemsPreview );
CMS.registerWidget( 'helpUsWidget', 'markdown', helpUsPreview );
CMS.registerWidget( 'bodyWidget', 'markdown', bodyPreview );
CMS.registerWidget( 'permalinkWidget', 'string', permalinkPreview );
CMS.registerWidget( 'navSectionWidget', 'string', navSectionPreview );
CMS.registerWidget( 'navSecondaryWidget', 'string', navSecondaryPreview );
CMS.registerWidget( 'navTertiaryWidget', 'string', navTertiaryPreview );
CMS.registerWidget( 'noPreviewStringWidget', 'string', noPreview );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
