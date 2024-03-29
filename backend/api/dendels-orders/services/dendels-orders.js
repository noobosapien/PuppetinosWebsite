"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async confirmationEmail(order) {
    const items = !order.items.id ? JSON.parse(order.items) : order.items;

    const shippingAddress = !order.shippingAddress.firstName
      ? JSON.parse(order.shippingAddress)
      : order.shippingAddress;

    const shippingOption = !order.shippingOption.price
      ? JSON.parse(order.shippingOption)
      : order.shippingOption;

    return `<html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="format-detection" content="telephone=no">
        <meta name="format-detection" content="date=no">
        <meta name="format-detection" content="address=no">
        <meta name="format-detection" content="email=no">
        <title>Order Confirmation</title>
        <style>
      
          @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
      
          .ReadMsgBody { width: 100%; background-color: #ffffff; }
          .ExternalClass { width: 100%; background-color: #ffffff; }
          .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
          html { width: 100%; }
          body { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; margin: 0; padding: 0; }
          table { border-spacing: 0; table-layout: fixed; margin: 0 auto; }
          img {-ms-interpolation-mode:bicubic;display:block; width:auto; max-width:auto; height:auto; }
          a[x-apple-data-detectors] {color:inherit !important;text-decoration:none !important;font-size:inherit !important;font-family:inherit !important;font-weight:inherit !important;line-height:inherit !important;}
          u + #body a {color:inherit;font-family:inherit;text-decoration:none;font-size:inherit;font-weight:inherit;line-height:inherit;}
          .appleLinks a {color: #c2c2c2 !important;text-decoration: none !important;}
          span.preheader {display:none !important; }
      
          /*------ Media Width 599px ------ */
          /*Responsive*/
          @media only screen and (max-width: 699px) {
          table.hideMobile, tr.hideMobile, td.hideMobile, br.hideMobile {display:none!important;}
          table.row, div.row {width: 100%!important;max-width: 100%!important;}
          table.centerFloat, td.centerFloat, img.centerFloat {float: none!important;margin:0 auto!important;}
          table.halfRow, div.halfRow {width: 50%!important;max-width: 50%!important;}
          td.imgResponsive img {width:100%!important;max-width: 100%!important;height: auto!important;margin: auto;}
          td.menuLink a {display: block;border-top: 1px solid;padding-top:20px;}
          td.centerText{text-align: center!important;}
          td.imgAuto img{text-align: center!important;margin: auto!important;}
          td.containerPadding {width: 100%!important;padding-left: 15px!important;padding-right: 15px!important;}
          td.spaceControl {height:15px!important;font-size:15px!important;line-height:15px!important;}
          }
        </style>
      
      
      </head>
      <body marginwidth="0" marginheight="0" style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" offset="0" topmargin="0" leftmargin="0">
      
      <table class="bodyBgColor" mc:hideable="" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#F7F7F7" style="width:100%;max-width:100%;">
        <tbody><tr>
          <td align="center" valign="top">
      
            <table class="row" width="700" border="0" align="center" cellpadding="0" cellspacing="0" style="width:700px;max-width:700px;" bgcolor="#ffffff">
              <tbody><tr>
                <td align="center" valign="middle" style="padding:0;">
                  <a href=""><img data-crop="false" mc:hideable="" mc:edit="" src="https://i.ibb.co/hKFfs9L/Logo.png" alt="Dendels" border="0" width="20%" style="display:block;border:0;width:20%;"></a>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
      
      
      <table mc:hideable="" class="bodyBgColor" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#F7F7F7" style="width:100%;max-width:100%;">
        <tbody><tr>
          <td align="center" valign="top">
      
            <table class="row" width="700" border="0" align="center" cellpadding="0" cellspacing="0" style="width:700px;max-width:700px;">
              <tbody><tr>
                <td data-bgcolor="Inner Background Color" class="whiteBgcolor" align="center" valign="top" bgcolor="#FFFFFF">
      
                  <table class="row" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;">
      
                    <tbody><tr>
                      <td height="30" align="center" valign="top" style="font-size:30px;line-height:30px;">&nbsp;</td>
                    </tr>
      
                    <tr>
                      <td class="containerPadding" align="center" valign="top" style="font-size:0;padding:0">
      
                        <table class="row" border="0" width="500" align="center" cellpadding="0" cellspacing="0" style="width:500px;max-width:500px;">
      
                          <tbody><tr>
                            <td data-size="Section Headlines" data-color="Section Headlines" class="Section Headlines" align="center" valign="middle" style="font-family:'Poppins',Arial,Helvetica,sans-serif;color:#3a8783;font-size:40px;line-height:44px;font-weight:600;letter-spacing:0px;padding:0px;padding-bottom:20px;">
                              Order Confirmation
                            </td>
                          </tr>
      
                          <tr>
                            <td valign="middle" align="center" style="padding:0;padding-bottom:20px">
                              <img data-color="Icons" mc:hideable="" mc:edit="" src="https://i.ibb.co/yYFSyXH/correct.png" alt="confirmation" border="0" width="200" style="display:block;border:0;width:200px;vertical-align:middle">
                            </td>
                          </tr>
      
                        </tbody></table>
      
                      </td>
                    </tr>
                    <tr>
                      <td height="30" align="center" valign="top" style="font-size:30px;line-height:30px;">&nbsp;</td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
      
      
      
      <table mc:hideable="" class="bodyBgColor" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#F7F7F7" style="width:100%;max-width:100%;">
        <tbody><tr>
          <td align="center" valign="top">
      
            <table class="row" width="700" border="0" align="center" cellpadding="0" cellspacing="0" style="width:700px;max-width:700px;">
              <tbody><tr>
                <td data-bgcolor="Inner Background Color" class="whiteBgcolor" align="center" valign="top" bgcolor="#FFFFFF">
      
                  <table class="row" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;">
                    <tbody>
      
      
                    <tr>
                      <td data-size="Section Headlines" data-color="Section Headlines" class="Section Headlines centerText" align="center" valign="middle" style="font-family:'Poppins',Arial,Helvetica,sans-serif;color:#3a8783;font-size:25px;line-height:44px;font-weight:400;letter-spacing:0px;padding:0px;padding-bottom:3px;">
                        Order #${order.orderAuth}
                      </td>
                    </tr>

                    <tr>
                    <td data-size="Section Headlines" data-color="Section Headlines" class="Section Headlines centerText" align="center" valign="middle" style="font-family:'Poppins',Arial,Helvetica,sans-serif;color:#3a8783;font-size:15px;line-height:44px;font-weight:400;letter-spacing:0px;padding:0px;padding-bottom:3px;">
                        Check your Order status <a href="https://dendels.co.nz/order/${
                          order.orderLink
                        }?auth=${order.orderAuth}">here</a>
                      </td>
                    </tr>

                            <tr>
                                 <td class="o_re o_bb-light" style="font-size: 2px;line-height: 2px;height: 2px;vertical-align: top;border-bottom: 1px solid #708670;" data-border-bottom-color="Border Light">&nbsp; </td>
                             </tr>
                            <tr>
                      <td height="20" align="center" valign="top" style="font-size:20px;line-height:20px;">&nbsp;</td>
                    </tr>
                    ${items.map(
                      (item) =>
                        `
                        <tr>
                          <td align="left" valign="top" style="font-size:0;padding:0;">
      
                          <!--[if (gte mso 9)|(IE)]><table border="0" cellpadding="0" cellspacing="0"><tr><td valign="middle"><![endif]-->
      
                            <div class="row" style="display:inline-block;max-width:65px;vertical-align:middle;width:100%">
                              <table class="row" border="0" align="center" cellpadding="0" cellspacing="0">
      
                                <tbody>
                                <tr>
                                            <td class="centerText"  valign="middle" style="font-family:'Poppins', sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 28px;line-height: 32px;text-align: left;padding-left: 8px;padding-right: 8px; vertical-align: middle;">
                                              <p class="o_text o_text-secondary"  style="font-size: 24px;line-height: 32px;color: #3a8783;margin-top: 0px;margin-bottom: 0px;">x${
                                                item.quantity
                                              }</p>
                                            </td>
                                </tr>
      
                              </tbody></table>
                            </div>
      
                            <!--[if (gte mso 9)|(IE)]></td><td valign="middle"><![endif]-->
      
                            <div class="row" style="display:inline-block;max-width:5px;vertical-align:middle;width:100%">
                              <table class="row" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                  <td height="5" align="center" valign="top" style="font-size:5px;line-height:5px;">&nbsp;</td>
                                </tr>
                              </tbody></table>
                            </div>
      
                            <!--[if (gte mso 9)|(IE)]></td><td valign="middle"><![endif]-->
      
                            <div class="row" style="display:inline-block;max-width:90px;vertical-align:middle;width:100%">
                              <table class="row" border="0" align="center" cellpadding="0" cellspacing="0">
      
                                <tbody><tr>
                                  <td class="imgAuto"  style= "font-family:'Poppins', sans-serif;margin-top: 0px;margin-bottom: 0px;text-align: left;padding-left: 8px;padding-right: 8px;">
                                                <img src="${
                                                  item.img
                                                }" width="90" style="width: 90px;" alt="${
                          item.name
                        }">
                                            </td>
                                </tr>
                              </tbody></table>
                            </div>
      
                            <!--[if (gte mso 9)|(IE)]></td><td valign="middle"><![endif]-->
      
      
                            <div class="row" style="display:inline-block;max-width:5px;vertical-align:middle;width:100%">
                              <table class="row" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                  <td height="5" align="center" valign="top" style="font-size:5px;line-height:5px;">&nbsp;</td>
                                </tr>
                              </tbody></table>
                            </div>
      
                            <!--[if (gte mso 9)|(IE)]></td><td valign="middle"><![endif]-->
      
                            <div class="row" style="display:inline-block;max-width:325px;vertical-align:middle;width:100%">
                              <table class="row" border="0" align="center" cellpadding="0" cellspacing="0">
      
                                <tbody><tr>
                                            <td class="centerText" style="font-family:'Poppins', sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 24px;line-height: 32px;text-align: center;padding-left: 8px;padding-right: 8px;"  align="left">
                                              <div class="o_text-secondary" data-color="Secondary" style="margin-bottom:0px;margin-block-start:0;margin-block-end:0;color: #3a8783;margin-middle: 0px;">${
                                                item.name
                                              }
                                            </td>
                                </tr>
                              </tbody></table>
                            </div>
      
                            <!--[if (gte mso 9)|(IE)]></td><td valign="middle"><![endif]-->
      
                            <div class="row" style="display:inline-block;max-width:5px;vertical-align:middle;width:100%">
                              <table class="row" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                  <td height="5" align="center" valign="top" style="font-size:5px;line-height:5px;">&nbsp;</td>
                                </tr>
                              </tbody></table>
                            </div>
      
                            <!--[if (gte mso 9)|(IE)]></td><td valign="middle"><![endif]-->
      
                            <div class="row" style="display:inline-block;max-width:95px;vertical-align:middle;width:100%">
                              <table class="row" border="0" align="center" cellpadding="0" cellspacing="0">
      
                                <tbody><tr>
      
                                            <td class="centerText" align="right" width="100px" style="font-family:'Poppins', sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 24px;line-height: 32px;text-align: right;padding-left: 8px;padding-right: 8px;">
                                                <p class="o_text-secondary" data-color="Secondary" style="color: #3a8783;margin-top: 0px;margin-bottom: 0px;">
                                                  $${
                                                    item.quantity *
                                                    (item.sale
                                                      ? item.lowPrice
                                                      : item.highPrice)
                                                  }
                                            </td>
                                </tr>
                              </tbody></table>
                            </div>
      
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
      
                          </td>
                        </tr>
                        <tr>
                          <td height="20" align="center" valign="top" style="font-size:20px;line-height:20px;">&nbsp;</td>
                        </tr>
                                <tr>
                                     <td class="o_re o_bb-light" style="font-size: 2px;line-height: 2px;height: 2px;vertical-align: top;border-bottom: 1px solid #708670;" data-border-bottom-color="Border Light">&nbsp; </td>
                                 </tr>
                                <tr>
                          <td height="20" align="center" valign="top" style="font-size:20px;line-height:20px;">&nbsp;</td>
                        </tr>
                        `
                    )}
      <!--START-->
                    
                    <!--END-->
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
      
      
      <table mc:hideable="" class="bodyBgColor" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#F7F7F7" style="width:100%;max-width:100%;">
        <tbody><tr>
          <td align="center" valign="top">
      
            <table class="row" width="700" border="0" align="center" cellpadding="0" cellspacing="0" style="width:700px;max-width:700px;">
              <tbody><tr>
                <td data-bgcolor="Inner Background Color" class="whiteBgcolor" align="center" valign="top" bgcolor="#FFFFFF">
      
                  <table class="row" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;">
      
                    <tbody>
                                <tr>
                      <td class="containerPadding" align="left" valign="top" style="font-size:0;padding:0">
      
                        <!--[if (gte mso 9)|(IE)]><table border="0" cellpadding="0" cellspacing="0"><tr><td valign="top"><![endif]-->
      
                        <div class="row" style="display:inline-block;max-width:290px;vertical-align:top;width:100%;">
                          <table class="row" border="0" align="left" cellpadding="0" cellspacing="0">
                            <tbody>
      
                                              <tbody><tr>
                                                  <td style="color: #3a8783;line-height: 24px; font-weight: 600; width: 290px;"> &nbsp;</td>
                          </tbody></table>
                        </div>
      
                        <!--[if (gte mso 9)|(IE)]></td><td valign="top"><![endif]-->
      
                        <div class="row" style="display:inline-block;max-width:20px;vertical-align:top;width:100%">
                          <table class="row" border="0" align="left" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                              <td height="1" align="center" valign="top" style="font-size:1px;line-height:1px;">&nbsp;</td>
                            </tr>
                          </tbody></table>
                        </div>
      
                        <!--[if (gte mso 9)|(IE)]></td><td valign="top"><![endif]-->
      
                        <div class="row" style="display:inline-block;max-width:290px;vertical-align:top;width:100%;">
                          <table class="row" border="0" align="right" cellpadding="0" cellspacing="0">
                            <tbody>
      
      
                                              <tbody>
                                                <tr>
                                                    <td style="font-family:'Poppins', Arial, Helvetica, sans-serif;font-size: 24px;color: #3a8783; font-weight: 600;">Shipping</td>
                                                    <td style="padding-right: 50px;">&nbsp;</td>
                                                   <td align="right" style="font-family:'Poppins', Arial, Helvetica, sans-serif;font-size: 24px;color: #3a8783;line-height: 24px">$${
                                                     shippingOption.price
                                                   }</td>
                                                </tr>
                                              <tr>
                                                  <td style="font-family:'Poppins', Arial, Helvetica, sans-serif;font-size: 24px;color: #3a8783; font-weight: 600;">Subtotal</td>
                                                  <td style="padding-right: 50px;">&nbsp;</td>
                                                 <td align="right" style="font-family:'Poppins', Arial, Helvetica, sans-serif;font-size: 24px;color: #3a8783;line-height: 24px">$${order.subtotal.toFixed(
                                                   2
                                                 )}</td>
                                              </tr>
                                              <tr>
                                                  <td style="font-family:'Poppins', Arial, Helvetica, sans-serif;font-size: 24px;color: #3a8783; font-weight: 600;">Total</td>
                                                  <td style="padding-right: 50px;">&nbsp;</td>
                                                 <td align="right" style="font-family:'Poppins', Arial, Helvetica, sans-serif;font-size: 24px;color: #3a8783;line-height: 24px">$${order.total.toFixed(
                                                   2
                                                 )}</td>
                                              </tr>
                          </tbody></table>
                        </div>
      
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
      
                      </td>
                    </tr>
                    <tr>
                      <td height="10" align="center" valign="top" style="font-size:10px;line-height:10px;">&nbsp;</td>
                    </tr>
      
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
      
      
      <table mc:hideable="" class="bodyBgColor" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#F7F7F7" style="width:100%;max-width:100%;">
        <tbody><tr>
          <td align="center" valign="top">
      
            <table class="row" width="700" border="0" align="center" cellpadding="0" cellspacing="0" style="width:700px;max-width:700px;">
              <tbody><tr>
                <td data-bgcolor="Inner Background Color" class="whiteBgcolor containerPadding" align="center" valign="top" bgcolor="#FFFFFF">
      
                  <table class="row" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;">
      
                    <tbody>
      
                    <tr>
                      <td align="center" valign="middle" style="padding:0;padding-bottom:10px;">
                        <table border="0" align="center" cellpadding="0" cellspacing="0">
                          <tbody><tr>
                            <td class="Blog-Dividers" width="590" align="center" style="border-bottom:1px solid #708670;border-radius:0px;">&nbsp;</td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                    <tr>
                      <td height="30" align="center" valign="top" style="font-size:30px;line-height:30px;">&nbsp;</td>
                    </tr>
      
      
                    <tr>
                      <td data-size="Section Headlines" data-color="Section Headlines" class="Section Headlines" align="left" valign="middle" style="font-family:'Poppins',Arial,Helvetica,sans-serif;color:#3a8783;font-size:22px;line-height:28px;font-weight:400;letter-spacing:0px;padding:0px;padding-bottom:8px; font-weight: bold;">
                        Shipping Details
                      </td>
                    </tr>
      
      
                    <tr>
                      <td data-size="Section Headlines" data-color="Section Headlines" class="Section Headlines" align="left" valign="middle" style="font-family:'Poppins',Arial,Helvetica,sans-serif;color:#3a8783;font-size:22px;line-height:28px;font-weight:400;letter-spacing:0px;padding:0px;padding-bottom:25px;">
                        ${shippingAddress.firstName} ${
      shippingAddress.lastName
    }  <br>
      
                        ${shippingAddress.address} <br>
      
                        ${
                          shippingAddress.apartment
                            ? shippingAddress.apartment
                            : ""
                        } <br>
                        
                        ${shippingAddress.city} <br>
                        ${shippingAddress.region} <br>
                        ${shippingAddress.zipCode} <br>
                        ${shippingAddress.country[0].name} <br>
                      </td>
                    </tr>
      
                    <tr>
                      <td align="center" valign="middle" style="padding:0;padding-bottom:20px;">
                        <table border="0" align="center" cellpadding="0" cellspacing="0">
                          <tbody><tr>
                            <td class="Blog-Dividers" width="590" align="center" style="border-bottom:1px solid #e3e3e3;border-radius:0px;">&nbsp;</td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
      
      
                    <tr>
                      <td data-size="Section Headlines" data-color="Section Headlines" class="Section Headlines" align="center" valign="middle" style="font-family:'Poppins',Arial,Helvetica,sans-serif;color:#3a8783;font-size:22px;line-height:28px;font-weight:400;letter-spacing:0px;padding:0px;padding-bottom:8px; font-weight: bold;">
                        Connect With Us!
                      </td>
                    </tr>
      
      
                    <tr>
                      <td data-size="Section Headlines" data-color="Section Headlines" class="Section Headlines" align="center" valign="middle" style="font-family:'Poppins',Arial,Helvetica,sans-serif;color:#3a8783;font-size:16px;line-height:22px;font-weight:400;letter-spacing:0px;padding:0px;padding-bottom:8px; font-weight: 400;">
                         If you have any questions or concerns please contact us at
      <a href="mailto:hi@dendels.co.nz" style="color: #3a8783; text-decoration: none;">hi@dendels.co.nz</a>
      
                      </td>
                    </tr>
                    <tr>
                      <td height="10" align="center" valign="top" style="font-size:10px;line-height:10px;">&nbsp;</td>
                    </tr>
      
                    
                    <tr>
                      <td height="30" align="center" valign="top" style="font-size:30px;line-height:30px;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td height="30" align="center" valign="top" style="font-size:30px;line-height:30px;">&nbsp;</td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
      
      </body></html>
      `;
  },
};
