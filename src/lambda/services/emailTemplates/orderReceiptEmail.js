const dayjs = require("dayjs");
const localizedFormat = require("dayjs/plugin/localizedFormat");
const es = require("dayjs/locale/es");
dayjs.locale(es);
dayjs.extend(localizedFormat);

module.exports = ({ order, user, isAdmin = false }) => {
  const formatDate = (date) => {
    let dayOfWeek = dayjs(date).format("dddd");
    dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
    let formattedDate = dayOfWeek + " " + dayjs(date).format("LL");
    return formattedDate;
  };
  let tableRows = "";
  order.products.map((item) => {
    tableRows += `
    <tr style="border-collapse:collapse"> 
    <td style="padding:5px 10px 5px 0;Margin:0" width="80%" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#333333">${
      item.name === "Cisterna" || item.name === "Tinaco"
        ? item.name + "*"
        : item.name
    }</p></td> 
    <td style="padding:5px 0;Margin:0" width="20%" align="right"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#333333">${item.price.toFixed(
      2
    )}</p></td> 
   </tr> 
            `;
  });

  return `
    
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <head> 
   <meta charset="UTF-8"> 
   <meta content="width=device-width, initial-scale=1" name="viewport"> 
   <meta name="x-apple-disable-message-reformatting"> 
   <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
   <meta content="telephone=no" name="format-detection"> 
   <title>New email template 2021-01-18</title> 
   <!--[if (mso 16)]>
     <style type="text/css">
     a {text-decoration: none;}
     </style>
     <![endif]--> 
   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
   <!--[if gte mso 9]>
 <xml>
     <o:OfficeDocumentSettings>
     <o:AllowPNG></o:AllowPNG>
     <o:PixelsPerInch>96</o:PixelsPerInch>
     </o:OfficeDocumentSettings>
 </xml>
 <![endif]--> 
   <!--[if !mso]>
   <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"> 
   <![endif]--> 
   <style type="text/css">
 #outlook a {
   padding:0;
 }
 .ExternalClass {
   width:100%;
 }
 .ExternalClass,
 .ExternalClass p,
 .ExternalClass span,
 .ExternalClass font,
 .ExternalClass td,
 .ExternalClass div {
   line-height:100%;
 }
 .es-button {
   mso-style-priority:100!important;
   text-decoration:none!important;
 }
 a[x-apple-data-detectors] {
   color:inherit!important;
   text-decoration:none!important;
   font-size:inherit!important;
   font-family:inherit!important;
   font-weight:inherit!important;
   line-height:inherit!important;
 }
 .es-desk-hidden {
   display:none;
   float:left;
   overflow:hidden;
   width:0;
   max-height:0;
   line-height:0;
   mso-hide:all;
 }
 @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:32px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:32px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; border-width:15px 30px 15px 30px!important } }
 </style> 
  </head> 
  <body style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
   <div class="es-wrapper-color" style="background-color:#EEEEEE"> 
    <!--[if gte mso 9]>
       <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
         <v:fill type="tile" color="#eeeeee"></v:fill>
       </v:background>
     <![endif]--> 
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
      <tr style="border-collapse:collapse"> 
       <td valign="top" style="padding:0;Margin:0"> 
        <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px"> 
                <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:282px" valign="top"><![endif]--> 
                <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                  <tr style="border-collapse:collapse"> 
                   <td align="left" style="padding:0;Margin:0;width:282px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td class="es-infoblock es-m-txt-c" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC">Pipas de Agua Puebla </p></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table> 
                <!--[if mso]></td><td style="width:20px"></td><td style="width:278px" valign="top"><![endif]--> 
                <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                  <tr style="border-collapse:collapse"> 
                   <td align="left" style="padding:0;Margin:0;width:278px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="right" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#CCCCCC"><a href="https://www.pipasangelopolis.com/" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:12px;text-decoration:none;color:#CCCCCC">Ir a Pagina principal</a></p></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table> 
                <!--[if mso]></td></tr></table><![endif]--></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table> 
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
          <tr style="border-collapse:collapse"></tr> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#044767;width:600px" cellspacing="0" cellpadding="0" bgcolor="#044767" align="center"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="Margin:0;padding-top:35px;padding-bottom:35px;padding-left:35px;padding-right:35px"> 
                <!--[if mso]><table style="width:530px" cellpadding="0" cellspacing="0"><tr><td style="width:340px" valign="top"><![endif]--> 
                <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                  <tr style="border-collapse:collapse"> 
                   <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:340px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td class="es-m-txt-c" align="left" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:36px;font-style:normal;font-weight:bold;color:#FFFFFF">Angelopolis</h1></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table> 
                <!--[if mso]></td><td style="width:20px"></td><td style="width:170px" valign="top"><![endif]--> 
                <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr class="es-hidden" style="border-collapse:collapse"> 
                   <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:170px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">                      
                      <tr style="border-collapse:collapse"> 
                       <td style="padding:0;Margin:0"> 
                        <table cellspacing="0" cellpadding="0" align="right" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                          <tr style="border-collapse:collapse"> 
                           <td align="left" style="padding:0;Margin:0"> 
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                              <tr style="border-collapse:collapse"> 
                               <td align="right" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#FFFFFF"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;text-decoration:none;color:#FFFFFF;line-height:22px" href="https://www.pipasangelopolis.com/" target="_blank">${
                                 isAdmin ? "" : "Pide tu pipa"
                               }</a></p></td> 
                              </tr> 
                            </table></td> 
                           
                          </tr> 
                        </table></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table> 
                <!--[if mso]></td></tr></table><![endif]--></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table> 
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="padding:0;Margin:0;padding-left:35px;padding-right:35px;padding-top:40px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="Margin:0;padding-top:25px;padding-bottom:25px;padding-left:35px;padding-right:35px;font-size:0"><a target="_blank" href="https://www.pipasangelopolis.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:16px;text-decoration:none;color:#ED8E20"><img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-check-mark-8.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="120"></a></td> 
                      </tr> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#333333">${
                         isAdmin ? "Tienes un Pedido" : "Gracias por tu Pedido!"
                       }</h2></td> 
                      </tr> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777">${
                         isAdmin
                           ? "Por favor revisa bien esta orden para cumplir con la entrega en tiempo y forma"
                           : "Estamos trabajando para llevarte tu pedido lo antes posible."
                       }<br></p></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table> 
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:35px;padding-right:35px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td bgcolor="#eeeeee" align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px"> 
                        <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:500px" class="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left" role="presentation"> 
                          <tr style="border-collapse:collapse"> 
                           <td width="80%" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">Orden #</h4></td> 
                           <td width="20%" style="padding:0;Margin:0" align="right"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">${
                             order.orderNumber
                           }</h4></td> 
                          </tr> 
                        </table></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="padding:0;Margin:0;padding-left:35px;padding-right:35px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px"> 
                        <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:500px" class="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left" role="presentation"> 
                         ${tableRows}
                        </table></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:35px;padding-right:35px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
                    <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-top:3px solid #EEEEEE;border-bottom:3px solid #EEEEEE" width="100%" cellspacing="0" cellpadding="0" role="presentation"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px"> 
                        <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:500px" class="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left" role="presentation"> 
                          <tr style="border-collapse:collapse"> 
                           <td width="80%" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">TOTAL</h4></td> 
                           <td width="20%" style="padding:0;Margin:0" align="right"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">$${
                             order.amount && order.amount.toFixed(2)
                           }</h4></td> 
                          </tr> 
                        </table></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="Margin:0;padding-left:35px;padding-right:35px;padding-top:40px;padding-bottom:40px"> 
                <!--[if mso]><table style="width:530px" cellpadding="0" cellspacing="0"><tr><td style="width:255px" valign="top"><![endif]--> 
                <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                  <tr style="border-collapse:collapse"> 
                   <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:255px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="padding:0;Margin:0;padding-bottom:15px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">Direccion de Entrega</h4></td> 
                      </tr> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#333333">${
                         order.address
                       }</p></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table> 
                <!--[if mso]></td><td style="width:20px"></td><td style="width:255px" valign="top"><![endif]--> 
                <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                  <tr style="border-collapse:collapse"> 
                   <td align="left" style="padding:0;Margin:0;width:255px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="padding:0;Margin:0;padding-bottom:15px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">Fecha de Entrega:<br></h4></td> 
                      </tr> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#333333">${formatDate(
                         order.deliveryDate
                       )}</p></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table> 
                <!--[if mso]></td></tr></table><![endif]--></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table> 
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="padding:0;Margin:0;padding-left:35px;padding-right:35px;padding-top:20px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#333333">
                       Instrucciones de entrega:  </h2></td> 
                      </tr> 
                      <tr style="border-collapse:collapse"> 
                       <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777">
                       <strong>${order.deliveryInstructions}</strong>
                       <br></p></td> 
                      </tr> 
                      <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#ff0f0f">
                      <strong>${
                        order.products.length > 4
                          ? "* El Costo de Lavado de cisterna y Lavado de tinaco no esta incluido en esta cotizacion ya que requiere informacion adicional para calcular el costo."
                          : ""
                      }</strong>
                      <br></p></td> 
                     </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table> 
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1B9BA3;width:600px" cellspacing="0" cellpadding="0" bgcolor="#1b9ba3" align="center"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="Margin:0;padding-top:35px;padding-bottom:35px;padding-left:35px;padding-right:35px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;padding-top:25px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#FFFFFF">${
                         isAdmin
                           ? "Si quieres hablar con el cliente"
                           : "Si quieres hablar con nosotros."
                       }</h2></td> 
                      </tr> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-bottom:15px;padding-top:30px"><span class="es-button-border" style="border-style:solid;border-color:transparent;background:#66B3B7;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href=${
                         isAdmin ? user.phoneNumber : "tel:2224362510"
                       } class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#66B3B7;border-width:15px 30px 15px 30px;display:inline-block;background:#66B3B7;border-radius:5px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">${
    isAdmin ? "Marcale Aqui" : "Llamanos Aqui"
  }</a></span></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table> 
        <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333"><strong>Cruz de Mayo 9511 </strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333"><strong>Col. Exhacienda Mayorazgo</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333"><strong>72480 Puebla, Puebla</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333"><strong>Tel: 222-436-2510</strong></p></td> 
                      </tr> 
                      
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table> 
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
          <tr style="border-collapse:collapse"> 
           <td align="center" style="padding:0;Margin:0"> 
            <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
              <tr style="border-collapse:collapse"> 
               <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      
                    </table></td> 
                  </tr> 
                </table></td> 
              </tr> 
            </table></td> 
          </tr> 
        </table></td> 
      </tr> 
    </table> 
   </div>  
  </body>
 </html>
    
    `;
};
