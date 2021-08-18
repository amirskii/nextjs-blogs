import slugify from "../utils/slugify"

export default function TutorialMetaTags(props) {
  const appNameSlug = slugify(props.data.app_name),
    platformSlug = slugify(props.data.platform);

  return (
    <>
      <meta content={`Best ${props.data.platform} ${props.data.app_name} for 2021 | Free ${props.data.app_name}`} property='og:title'/>
      <meta content={`Best ${props.data.platform} ${props.data.app_name} for 2021 | Free ${props.data.app_name}`} property='twitter:title'/>
      <link rel="shortcut icon" type="image/x-icon" href="//www.powrcdn.com/images/favicon.ico" />
      <link href='//www.powrcdn.com/images/favicon.ico' rel='shortcut icon'/>
      <meta content='plugins, website tools, business tools, widgets, add-ons, modules, extentions' name='keywords'/>
      <meta content={`Impress your visitors with the best ${props.data.app_name} for ${props.data.platform}. Create your ${props.data.app_name} and embed it on your site in 1 minute. No code. Get started free today.`} name='description'/>
      <meta content={`Impress your visitors with the best ${props.data.app_name} for ${props.data.platform}. Create your ${props.data.app_name} and embed it on your site in 1 minute. No code. Get started free today.`} name='twitter:description'/>
      <meta content={`Impress your visitors with the best ${props.data.app_name} for ${props.data.platform}. Create your ${props.data.app_name} and embed it on your site in 1 minute. No code. Get started free today.`} name='og:description'/>
      <meta content={`https://www.powr.io/${appNameSlug}-for-${platformSlug}-how-to-add-to-your-site?src=tutorials`} property='og:url'/>
      <meta content={`https://www.powr.io/${appNameSlug}-for-${platformSlug}-how-to-add-to-your-site?src=tutorials`} name='url'/>
      <meta content={`https://www.powr.io/${appNameSlug}-for-${platformSlug}-how-to-add-to-your-site?src=tutorials`} name='identifier-URL'/>
      <meta content={`https://www.powrcdn.com/images/landing_pages/html/${appNameSlug}-display.webp`} property='og:image'/>
      <meta content='POWR Inc' name='copyright'/>
      <meta content='index,follow' name='robots'/>
      <meta content='POWR, support@powr.io' name='author'/>
      <meta content='support@powr.io' name='reply-to'/>
      <meta content='support@powr.io' name='og:email'/>
      <meta content='summary' name='twitter:card'/>
      <meta content='POWR' name='og:site_name'/>
      <meta content='article' property='og:type'/>
      <meta content='455636541214915' name='fb:page_id'/>
      <meta content='general' name='rating'/>
       {/* TODO: tutorial_urls from powr project */}
      <link href='/about-us-for-html-how-to-add-to-your-site?src=tutorials' hreflang='en' rel='alternate'/>
      <link href='/uber-uns-fur-html-wie-installiere-auf-deiner-seite?src=tutorials' hreflang='de' rel='alternate'/>
      <link href='/quienes-somos-para-html-como-agregar-a-tu-pagina-web?src=tutorials' hreflang='es' rel='alternate'/>
      <link href='/about-us-pour-html-comment-ajouter-a-votre-site?src=tutorials' hreflang='fr' rel='alternate'/>
      <link href='/about-us-para-html-como-adicionar-ao-seu-site?src=tutorials' hreflang='pt' rel='alternate'/>
      <link href='/about-us-per-html-come-aggiungere-al-tuo-sito?src=tutorials' hreflang='it' rel='alternate'/>
      <link href='/about-us-icin-html-sitenize-nasıl-eklenir?src=tutorials' hreflang='tr' rel='alternate'/>
      <link href='/about-us-voor-html-hoe-u-toevoegt-aan-uw-site?src=tutorials' hreflang='nl' rel='alternate'/>
      <link href='/about-us-для-html-как-добавить-на-ваш-сайт?src=tutorials' hreflang='ru' rel='alternate'/>
      <link href='/about-us-のために-html-あなたのサイトに追加する方法?src=tutorials' hreflang='ja' rel='alternate'/>
      <link href='/about-us-为-html-如何将添加到您的网站?src=tutorials' hreflang='zh' rel='alternate'/>
      <link href='/about-us-केलिए-html-अपनीवेबसाइट-परकैसे-जोड़ें?src=tutorials' hreflang='hi' rel='alternate'/>
    </>
)
}

