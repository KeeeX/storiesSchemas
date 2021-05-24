
$("document").ready(function() {
  const schemaLink = "https://static.keeex.me/xesop-dumal-syles-tesos-loriz-lidiv-loceb-monyr-cafym-mecim-pupok-mapyl-zoror-degar-dobyv-hatad-goxyx.json#person";
  $.getJSON(schemaLink, (personSchema) => {
    $("form").jsonForm({
      schema: personSchema,
      onSubmit: (errors, values) => {
        if (errors) {
          $("#res").html("<p>Oops! Something wrong happened.</p>");
        } else {
          $("#res").html("<p>Hello " + values.name + "." +
            (values.age ? "<br/>You are " + values.age + "." : "") +
            (values.address ? "<br/>Your address is " + values.address + "." : "") +
            "</p>");
        }
      }
    });
  });
});

/*
keeex self xomis-hamek-ducyp-cotav-ludit-tysin-bygyn-bemah-hehyd-sykah-canyz-tokyc-metuh-korat-dazur-dugen-vixox , {main} xeeek
keeex self 19yz8qsKGR7tBL43PnQUHZ9EFfH9KwUSKynxA4m , {alg:sha224,enc:b58,recursive:1} xeeek
keeex name "example.js" , {main} xeeek
keeex prop "kx.author", "redat-kekuh-cemez-cisyt-mynyt-movag-dihaf-fopov-bimim-himuz-damoc-kemyh-fisof-hubir-semis-satig-dyxyr" xeeek
keeex ref "rogog-conas-ryzez-kuguv-pupec-vogos-dotiz-zafoz-lutyn-femim-tefig-vaset-hymyr-lemuc-kadyb-vizic-syxar" , {mine} xeeek
keeex signer rerom-cityz-bivyc-ralav-bumon-mudyh-hocyr-pikyv-sysyz-cunat-gesiz-lipig-cozof-harif-sapor-gacaf-nixer xeeek
keeex prop "kx.time", "Mon, 24 May 2021 10:11:34 GMT" xeeek
keeex prop "kx.pattern", "%f_kx_$1-$2" xeeek
keeex prop "kx.publickey", "1EPvJdUDpZNELvbBc2DeowG2J2ZnFZbNCy", {bitcoin} xeeek
keeex protected "Gwge26Sfud55t47B42:w05v9qRy6yX0NJFVsHGbGL99L3mXpbNACyb6en27g7J1tf6Piiw4Xx2VsiurhozgICF4=" , {bitcoin} xeeek
keeex prop "kx.folder", "javascripts" xeeek
keeex ref "renal-pesob-lacuc-rakeb-ribyf-malaf-cesil-zulen-pedit-cigab-lisas-tydyg-surim-fyrub-goduk-furyv-fexyr" xeeek
keeex ref "rebos-kutik-rudul-zirig-cihoh-gyzum-decav-gonot-tonib-pupeb-fumup-bapyr-kamyk-malud-fykil-pumic-tixor" xeeek

*/