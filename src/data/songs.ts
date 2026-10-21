export interface Song {
  /** Used in the URL: /lyrics/<slug> — keep it unique, lowercase, hyphenated. */
  slug: string;
  title: string;
  language: string;
  /** Write lyrics as-is; line breaks and blank lines between verses are preserved. */
  lyrics: string;
}

// Add your songs here. Songs are grouped on the home page by `language`.
export const songs: Song[] = [
  {
    slug: 'lailakame',
    title: 'Lailakame',
    language: 'Malayalam',
    lyrics: `പാടുന്നു പ്രിയ രാഗങ്ങൾ ചിരി മായാതെ നഗരം
തേടുന്നു പുതു തീരങ്ങൾ കൊതി തീരാതെ ഹൃദയം
കണ്ണെത്താ ദൂരത്തെ കൺചിമ്മും ദീപങ്ങൾ
നാം കണ്ട സ്വപ്നങ്ങൾ പോൽ
ലൈലാകമേ പൂ ചൂടുമോ
വിടവാങ്ങുമീ രാത്രി തൻ വാതിലിൽ (ഓ ഓ)
ആകാശമേ നീർ പെയ്യുമോ (ഓ ഓ)
പ്രണയാർദ്രമീ ശാഖിയിൽ ഇന്നിതാ
മനസ്സിൻ ശിലാതലം മഴപോൽ പുണർന്നു നിൻ
ഓരോ മൗനങ്ങളും
പകലിൻ വരാന്തയിൽ വെയിലായ് അലഞ്ഞിതാ
തമ്മിൽ ചേരുന്നു നാം
തലോടും ഇന്നലെകൾ കുളിരോർമ്മ തൻ വിരലാൽ
തുടരുന്നു നീ സഹയാത്രയിൽ
ആ ആ
ലൈലാകമേ പൂ ചൂടുമോ
വിടവാങ്ങുമീ രാത്രി തൻ വാതിലിൽ
പാടുന്നു പ്രിയ രാഗങ്ങൾ ചിരി മായാതെ നഗരം
തേടുന്നു പുതു തീരങ്ങൾ കൊതി തീരാതെ ഹൃദയം
കണ്ണെത്താ ദൂരത്തെ കൺചിമ്മും ദീപങ്ങൾ
നാം കണ്ട സ്വപ്നങ്ങൾ പോൽ
ലൈലാകമേ പൂ ചൂടുമോ
വിടവാങ്ങുമീ രാത്രി തൻ വാതിലിൽ(ഒ)
ആകാശമേ നീർ പെയ്യുമോ(ഓ)
പ്രണയാർദ്രമീ ശാഖിയിൽ ഇന്നിതാ(ആ)
ഉം ആ ആ ആ ആ ആ ആ`,
  },
  {
    slug: 'ore-nila',
    title: 'Ore Nila',
    language: 'Malayalam',
    lyrics: `ആകാശവും മേഘവും സഖീ
നാമെന്നപോൽ ചേർന്നിതാ
പാടുന്നു ഞാൻ മൗനമായ് സഖീ
നീ കേൾക്കുവാൻ മാത്രമായ്
മായുന്നു രാവും താരങ്ങളും
കണ്മുന്നിലെങ്ങും നീ മാത്രമായ്
ഒരേ നിലാ ഒരേ വെയിൽ
ഒന്നായിതാ ഉൾ മൊഴി ഒന്നായിതാ കൺവഴി
ഒരേ നിലാ ഒരേ വെയിൽ
സ്വപ്നങ്ങളും മോഹവും ഒന്നിനി
വിരലുരുമ്മിയും മെല്ലവേ മൊഴികളോതിയും
പാതിരാചുരങ്ങളിൽ മായുന്നിതാ
ഒരു കിനാവിനാൽ എൻമനം പുലരിയാക്കി നീ
നിന്നിലെ പ്രകാശമെൻ സൂര്യോദയം
എൻ ഉയിരേ നിന്നരികേ എൻ മനമോ വെൺമലരായ്
പ്രണയമീ വഴിയേ പൂവണിയുന്നിതാ മഴവില്ലു പോലെ
ഒരേ നിലാ ഒരേ വെയിൽ
ഒന്നായിതാ ഉൾ മൊഴി ഒന്നായിതാ കൺവഴി
ഒരേ നിലാ ഒരേ വെയിൽ
സ്വപ്നങ്ങളും മോഹവും ഒന്നിനി
ഒരേ നിലാ
ഒരേ വെയിൽ`,
  },
  {
    slug: 'nilavinte-neelabhasma',
    title: 'Nilavinte Neelabhasma',
    language: 'Malayalam',
    lyrics: `നിലാവിന്‍റെ നീലഭസ്മ കുറിയണിഞ്ഞവളേ..
കാതിലോല കമ്മലിട്ടു കുണുങ്ങി നിൽപ്പവളേ..
ഏതപൂർവ്വ തപസ്സിനാൽ ഞാൻ സ്വന്തമാക്കി നിൻ
രാഗലോല പരാഗസുന്ദര ചന്ദ്രമുഖബിംബം..

തങ്കമുരുകും നിന്‍റെ മെയ് തകിടിലിൽ ഞാനെൻ
നെഞ്ചിലെ അനുരാഗത്തിൻ മന്ത്രമെഴുതുമ്പോൾ
കണ്ണിലെരിയും കുഞ്ഞുമൺ ‌വിളക്കിൽ വീണ്ടും
വിങ്ങുമെൻ അഭിലാഷത്താൽ എണ്ണ പകരുമ്പോൾ
തെച്ചിപ്പൂഞ്ചോപ്പിൽ തത്തും ചുണ്ടിൻ‌മേൽ ചുംബിക്കുമ്പോൾ
ചെല്ലക്കാറ്റേ കൊഞ്ചുമ്പോൾ....
എന്തിനീ നാണം... തേനിളം നാണം...

മേടമാസച്ചൂടിലെ നിലാവും തേടി..
നാട്ടുമാവിൻ ചോട്ടിൽ നാം വന്നിരിക്കുമ്പോൾ..
കുഞ്ഞുകാറ്റിൻ ലോലമാം കുസൃതിക്കൈകൾ
നിന്റെയോമൽ പാവാടത്തുമ്പുലയ്ക്കുമ്പോൾ
ചാഞ്ചക്കം ചെല്ലക്കൊമ്പിൽ ചിങ്കാരച്ചേലിൽ മെല്ലെ
താഴം‌പൂവായ് തുള്ളുമ്പോൾ ..
നീയെനിയ്ക്കല്ലേ... നിൻ പാട്ടെനിയ്ക്കല്ലേ...`,
  },
  {
    slug: 'aradhike',
    title: 'Aradhike',
    language: 'Malayalam',
    lyrics: `ആരാധികേ..
മഞ്ഞുതിരും വഴിയരികേ...
നാളേറെയായ്..
കാത്തുനിന്നു മിഴിനിറയേ...

നീയെങ്ങു പോകിലും..
അകലേയ്ക്കു മായിലും...
എന്നാശകൾ തൻ മൺതോണിയുമായ്
തുഴഞ്ഞരികേ ഞാൻ വരാം...

എന്റെ നെഞ്ചാകെ നീയല്ലേ..
എന്റെ ഉന്മാദം നീയല്ലേ...
നിന്നെയറിയാൻ ഉള്ളുനിറയാൻ
ഒഴുകിയൊഴുകി ഞാൻ
എന്നുമെന്നുമൊരു പുഴയായ്...

ആരാധികേ...

പിടയുന്നോരെന്റെ ജീവനിൽ
കിനാവു തന്ന കണ്മണി
നീയില്ലയെങ്കിലെന്നിലെ
പ്രകാശമില്ലിനി...

മിഴിനീരു പെയ്ത മാരിയിൽ
കെടാതെ കാത്ത പുഞ്ചിരി
നീയെന്നൊരാ പ്രതീക്ഷയിൽ
എരിഞ്ഞ പൊൻതിരി

മനം പകുത്തു നൽകിടാം
കുറുമ്പുകൊണ്ടു മൂടിടാം
അടുത്തു വന്നിടാം കൊതിച്ചു നിന്നിടാം
വിരൽ കൊരുത്തിടാം സ്വയം മറന്നിടാം
ഈ ആശകൾ തൻ മൺതോണിയുമായ്
തുഴഞ്ഞകലേ പോയിടാം...

എന്റെ നെഞ്ചാകെ നീയല്ലേ..
എന്റെ ഉന്മാദം നീയല്ലേ...
നിന്നെയറിയാൻ ഉള്ളുനിറയാൻ
ഒഴുകിയൊഴുകി ഞാൻ
എന്നുമെന്നുമൊരു പുഴയായ്...

ആരാധികേ..
മഞ്ഞുതിരും വഴിയരികേ...

ഒരുനാൾ കിനാവു പൂത്തിടും
അതിൽ നമ്മളൊന്നു ചേർന്നിടും
പിറാക്കൾ പൊലിതേ വഴി
നിലാവിൽ പാറിടും...

നിനക്കു തണലായി ഞാൻ
നിനക്കു തുണയായി ഞാൻ
പല കനവുകൾ പകലിരവുകൾ
നിറമണിയുമീ കഥയെഴുതുവാൻ
ഈ ആശകൾ തൻ മൺതോണിയുമായ്
തുഴഞ്ഞകലേ പോയിടാം...

എന്റെ നെഞ്ചാകെ നീയല്ലേ..
എന്റെ ഉന്മാദം നീയല്ലേ...
നിന്നെയറിയാൻ ഉള്ളുനിറയാൻ
ഒഴുകിയൊഴുകി ഞാൻ...
എന്നുമെന്നുമൊരു പുഴയായ്...

ആരാധികേ...
മഞ്ഞുതിരും വഴിയരികേ...`,
  },
  {
    slug: 'nenjakame',
    title: 'Nenjakame',
    language: 'Malayalam',
    lyrics: `തനം നാന നാ തനം നാന നാ
തനം നാന നാ തനം നാന നാ
തനം നാന നാ തനം നാന നാ താന താന
തനം നാന നാ തനം നാന നാ
തനം നാന നാ തനം നാന നാ
തനം നാന നാ തനം നാന നാ താന താന
തനം നാന നാ തനം നാന നാ
തനം നാന നാ തനം നാന നാ
തനം നാന നാ തനം നാന നാ താന താന
നെഞ്ചകമേ നെഞ്ചകമേ
പുഞ്ചിരി തൻ പാൽമഴ താ
നാൾവഴിയേ നാം അണയേ
ഊയൽ ഇടാൻ കാറ്റല താ
സായൂജ്യമായിന്നിതാ
ഈ ഭൂമി പാടുന്നേ
താരാട്ടും പാട്ടിൻ ഈണമായ്
ഭാരങ്ങൾ ഇല്ലാതെ നാം
ഭാവാർദ്രമായ്
ആ
കുഞ്ഞു കിളിയേ
രാവിതിരുളുകയായ്
ഒന്ന് കൂടേറാൻ
മെല്ലെ നീ തിരികെ വരൂ
കാതിൽ അരുളാൻ
നൂറു മൊഴികളുമായ്
വിങ്ങി ആരാരോ
ഇന്നും നിന്നെ നിനച്ചിരിപ്പൂ
താരവും മന്ദാരവും
ആ കൺമുനകളിൽ അഴകെഴുകി
സല്ലാപമായ് സംഗീതമായ്
വെണ്ണിലവും തെന്നലും
ആദ്യമായ് ഇന്നാദ്യമായ്(ഓ)
എൻ കരളിതിൽ നദിയൊഴുകി
പുൽനാമ്പു പോൽ ഉൾനാമ്പിലും
നീരണിയാ വൈരമായ്
നൊമ്പരമോ, മറ നീക്കി മൂകമായ്
ഓരോ നിനവുകളും സാന്ത്വനമായ്
പകൽ വന്നുപോയ്
വെയിൽ വന്നുപോയ്
ഇരുൾ വന്നുപോയ്
നിഴൽ വീണുപോയ്
മഴത്തുള്ളിയായ് തുളുമ്പുന്നിതാ നീയും ഞാനും
മണിച്ചില്ലയിൽ കുയിൽ കൊഞ്ചലും
മലർത്താരയിൽ കണി തിങ്കളും
വരം കൊണ്ടതോ കടം തന്നതോ ഇന്നീ യാമം
നെഞ്ചകമേ നെഞ്ചകമേ
പുഞ്ചിരി തൻ പാൽമഴ താ
നാൾവഴിയേ നാം അണയേ
ഊയൽ ഇടാൻ കാറ്റല താ
സായൂജ്യമായ് ഇന്നിതാ
ഈ ഭൂമി പാടുന്നേ
താരാട്ടും പാട്ടിൻ ഈണമായ്
ഭാരങ്ങൾ ഇല്ലാതെ നാം
ഭാവാർദ്രമായ്
ഓർമപ്പുഴയായ്
കൂടെ ഒഴുകി വരേ
വർണ മീനായ് നാം
വേണ്ടുവോളം അതിലലിയാം
ഇന്നു പതിയെ
ഉള്ളം ഉരുകുകയായ്
തുള്ളി മഴ പോലെ
മെല്ലെ മിഴി നിറയുകയായ്
ഓർമപ്പുഴയായ്
കൂടെ ഒഴുകി വരേ
വർണ മീനായ് നാം
വേണ്ടുവോളം അതിലലിയാം
ഇന്നു പതിയെ
ഉള്ളം ഉരുകുകയായ്
തുള്ളി മഴ പോലെ
മെല്ലെ മിഴി നിറയുകയായ്`,
  },
  {
    slug: 'nila-nila',
    title: 'Nila Nila',
    language: 'Malayalam',
    lyrics: `നിലാ നിലാ മിഴിയേ നിളാ നിളാ മൊഴിയേ
ഒളിയമ്പിനെയ്യരുതേ... ഇനി എന്റെ സുന്ദരിയേ
നിലാ നിലാ മിഴിയേ നിളാ നിളാ മൊഴിയേ (2)
ഒളിയമ്പിനെയ്യരുതേ... ഇനിയെന്റെ ജന്മസഖിയേ

കണ്ണാടിക്കടമിഴിമുന്നിൽ വന്നണിഞ്ഞതിനി നീയോ
മായല്ലേ മായല്ലേ
കളിവാക്കിൻ മുനയുടെ നാവിൽ മുള്ളുതന്നെയെന്നാലും
തേനായ് നീ തേനായ് നീ
പറയില്ലെ എന്റെ കാതിൽ പതിയെ നീ
ഞാനല്ലേ ഞാനല്ലേ നിൻ മാരൻ... (നറു നിലാ നിലാ)

ആത്മാവിൻ തളികയിലെന്നും നല്ല പാതി മലരാവാൻ
വന്നു നീ... വന്നു നീ...
മഴമേഘത്തലമുടിയോടെ എന്നെയൊന്നു പുണരാനായ്
നിന്നു നീ... നിന്നു നീ
നിറമാടും മാരിവില്ലേ അരികിലായ്
നീയല്ലേ നീയല്ലേ മായാതെ.. (ഇള നിലാ നിലാ)

നിലാ നിലാ മിഴിയേ നിളാ നിളാ മൊഴിയേ (2)
ഒളിയമ്പിനെയ്യരുതേ... ഇനിയെന്റെ ജന്മസഖിയേ`,
  },
  {
    slug: 'oru-venal-puzhayil',
    title: 'Oru Venal Puzhayil',
    language: 'Malayalam',
    lyrics: `മാംഗല്യം തന്തുനാനേനാ മമ ജീവനഹേതു നാം
കണ്ഠേ ബധ്നാമി ശുഭഗേ ത്വം ജീവ ശരദാ ശതം
ഒരു വേനൽ പുഴയിൽ തെളിനീരിൽ പുലരി തിളങ്ങീ മൂകം
ഇലകളിൽ പൂക്കളിൽ എഴുതീ ഞാൻ ഇളവെയിലായ് നിന്നെ
മേഘമായ് എൻ താഴ്വരയിൽ താളമായ് എൻ ആത്മാവിൽ
നെഞ്ചിലാളും മൺചിരാതിൻ നാളം പോൽ നിന്നാലും നീ
വേനൽ പുഴയിൽ തെളിനീരിൽ പുലരി തിളങ്ങീ മൂകം
ഇലകളിൽ പൂക്കളിൽ എഴുതി ഞാൻ ഇളവെയിലായ് നിന്നെ
ഒരു കാറ്റ് നീന്തി വന്നെന്നിൽ പെയ്തു നിൽക്കു നീയെന്നും
മഴ മയിൽപീലി നീർത്തും പ്രിയസ്വപ്നമേ
പല വഴിമരങ്ങളായ് നിനവുകൾ നിൽക്കെ
കൊലുസ്സണിയുന്ന നിലാവേ
നിൻ പദ താളം വഴിയുന്ന വനവീഥി ഞാൻ
വേനൽ പുഴയിൽ തെളിനീരിൽ പുലരി തിളങ്ങീ മൂകം
ഇലകളിൽ പൂക്കളിൽ എഴുതീ ഞാൻ ഇള വെയിലായ് നിന്നെ
മാംഗല്യം തന്തുനാനേനാ മമ ജീവനഹേതു നാം
കണ്ഠേ ബധ്നാമി ശുഭഗേ ത്വം ജീവ ശരദാ ശതം
ചിരമെൻ തിരകൈകൾ നീളും ഹരിതാർദ്രതീരം
പല ജന്മമായ് മനം തേടും മൃദു നിസ്വനം
വെയിലിഴകൾ പാകിയീ മന്ദാരത്തിൻ ഇലകൾ പൊതിഞ്ഞൊരു കൂട്ടിൽ
തപസ്സിൽ നിന്നുണരുന്നു ശലഭം പോൽ നീ
വേനൽ പുഴയിൽ തെളിനീരിൽ പുലരി തിളങ്ങീ മൂകം
ഇലകളിൽ പൂക്കളിൽ എഴുതീ ഞാൻ ഇളവെയിലായ് നിന്നെ
മേഘമായ് എൻ താഴ്വരയിൽ താളമായ് എൻ ആത്മാവിൽ
നെഞ്ചിലാളും മൺചിരാതിൻ നാളം പോൽ നിന്നാലും നീ`,
  },
  {
    slug: 'eeran-mekham',
    title: 'Eeran Mekham',
    language: 'Malayalam',
    lyrics: `ഈറന്‍ മേഘം പൂവും കൊണ്ടേ
പൂജയ്ക്കായ് ക്ഷേത്രത്തില്‍ പോകുമ്പോള്‍
പൂങ്കാറ്റും സോപാനം പാടുമ്പോള്‍
പൂക്കാരി നിന്നെ കണ്ടു ഞാന്‍...(ഈറൻ മേഘം..)

ആ..ആ..ആ..ആ…. ആ..

മഴ കാത്തു കഴിയുന്ന മനസ്സിന്റെ വേഴാമ്പല്‍
ഒരു മാരിമുകിലിനെ പ്രണയിച്ചു പോയ്
പൂവമ്പനമ്പലത്തില്‍ പൂജയ്ക്കു പോകുമ്പോള്‍
പൊന്നും മിന്നും നിന്നെ അണിയിക്കും ഞാന്‍...
ആ..ആ..ആ..ആ…. ആ..
വാനിടം മംഗളം ആലപിക്കേ..
ഓമനേ നിന്നെ ഞാന്‍ സ്വന്തമാക്കും

(ഈറന്‍...)

വെണ്‍മേഘ ഹംസങ്ങള്‍ തൊഴുതു വലംവെച്ചു
സിന്ദൂരം വാങ്ങുന്ന ഈ സന്ധ്യയില്‍..
നെറ്റിയില്‍ ചന്ദനവും ചാര്‍ത്തി നീ അണയുമ്പോള്‍
മുത്തം കൊണ്ടു കുറിചാര്‍ത്തിയ്ക്കും ഞാന്‍..
ആ..ആ..ആ..ആ.. ആ..
വേളിക്കു ചൂടുവാന്‍ പൂ പോരാതെ
മാനത്തും പിച്ചകപ്പൂ വിരിഞ്ഞു

(ഈറന്‍...)`,
  },
  {
    slug: 'nenjukkul-peidhidum',
    title: 'Nenjukkul Peidhidum',
    language: 'Tamil',
    lyrics: `Nenjukul peidhidum
Maamazhai neerukul
Moozhgidum thamarai
Sattendru marudhu vaanilai
Pennae un mel pizhai

Nillamal veesidum
Peralai nenjukul neenthidum
Tharagai pon vannam soodiya
Kaarigai pennae nee kaanchanai

Oh shanthi
Shanthi oh shanthi
En uyirai uyirai
Neeyenthi

Yen sendrai
Sendrai ennai thaandi
Ini neethaan endhan andhaathi

Nenjukul peidhidum
Maamazhai neerukul
Moozhgidum thamarai
Sattendru marudhu vaanilai
Pennae un mel pizhai

Yedho ondru
Ennai eerka mookin
Nuni marmam serka
Kalla thanam yethum illaa
Punnagaiyo boganvilla

Nee nindra idam
Endral vilai yeri pogaadho
Nee sellum vazhi ellam
Panikatti aagaadho

Ennodu vaa
Veedu varaikum
En veetai paar
Ennai pidikum

Ival yaaro
Yaaro theriyaadhae
Ival pinnal nenjae pogadhae

Idhu poiyo
Meiyo theriyaadhae
Ival pinnal nenjae
Pogadhae pogadhae

Nenjukul peidhidum
Maamazhai neerukul
Moozhgidum thamarai
Sattendru marudhu vaanilai
Pennae un mel pizhai hoo

Nillamal veesidum
Peralai nenjukul neenthidum
Thaaragai pon vannam soodiya
Kaarigai pennae nee kaanchanai

Thookangalai
Thooki sendraai
Thooki sendraai

Yekkangalai thoovi sendraai

Unnai thaandi
Pogum podhu
Pogum podhu

Veesum kaatrin
Veechu veru

Nil endru nee sonnaal
En kaalam nagaradhae
Nee soodum poovellam
Oru podhum udhiradhae

Kaadhal enai
Ketka villai
Ketkathadhu kaadhal illai

En jeevan
Jeevan neethaanae
Ena thondrum neram idhuthaanae

Nee illai illai
Endralae en nenjam
Nenjam thaangadhae

Nenjukul peidhidum
Maamazhai neerukul
Moozhgidum thamarai
Sattendru marudhu vaanilai
Pennae un mel pizhai

Nillamal veesidum
Peralai nenjukul neenthidum
Thaaragai pon vannam soodiya
Kaarigai pennae nee kaanchanai

Oh shanthi
Shanthi oh shanthi
En uyirai uyirai
Neeyenthi

Yen sendrai
Sendrai ennai thaandi
Ini neethaan endhan andhaathi`,
  },
  {
    slug: 'kaatrin-mozhi',
    title: 'Kaatrin Mozhi',
    language: 'Tamil',
    lyrics: `Kaatrin mozhi oliyaa isaiyaa
Poovin mozhi niramaa manamaa
Kadalin mozhi alaiyaa nuraiyaa
Kaadhal mozhi vizhiyaa idhazhaa

Iyarkaiyin mozhigal purinthuvidil
Manitharin mozhigal thevai illai
Idhayathin mozhigal purinthuvidil
Manitharku mozhiyae thevai illai….

Kaatrin mozhi oliyaa isaiyaa
Poovin mozhi niramaa manamaa

Kaatru veesum bothu
Thisaigal kidayaathu
Kaadhal pesum bothu
Mozhigal kidaiyaathu

Pesum vaarthai pola
Mounam puriyaathu
Kangal pesum vaarthai
Kadavul ariyaathu

Ulavi thiriyum kaatruku
Uruvam theeta mudiyaathu
Kaadhal pesum mozhiyellam
Sabthakootil adangaathu

Iyarkaiyin mozhigal purinthuvidil
Manitharin mozhigal thevai illai
Idhayathin mozhigal purinthuvidil
Manitharku mozhiyae thevai illai….

Kaatrin mozhi…..

Vaanam pesum pechu
Thuliyaai veliyaagum
Vaanavillin pechu
Niramaai veliyaagum

Unmai oomai aanal
Kaneer mozhi aagam
Pennmai oomai aanal
Naanam mozhi aagum

Osai thoongum jaamathil
Uchchi meengal mozhiyaagum
Aasai thoongum idhayathil
Asaivu kooda mozhiyaagum

Iyarkaiyin mozhigal purinthuvidil
Manitharin mozhigal thevai illai
Idhayathin mozhigal purinthuvidil
Manitharku mozhiyae thevai illai….

Kaatrin mozhi oliyaa isaiyaa
Poovin mozhi niramaa manamaa
Kadalin mozhi alaiyaa nuraiyaa
Kaadhal mozhi vizhiyaa idhazhaa

Iyarkaiyin mozhigal purinthuvidil
Manitharin mozhigal thevai illai
Idhayathin mozhigal purinthuvidil
Manitharku mozhiyae thevai illai….

Kaatrin mozhi…..`,
  },
  {
    slug: 'munbe-vaa',
    title: 'Munbe Vaa',
    language: 'Tamil',
    lyrics: `Munbae vaa en anbae vaa
Oonae vaa uyirae vaa
Munbae vaa en anbae vaa
Poo poovaai poopom vaa..

Naan naana keten ennai naanae
Naan neeya nenjam sonnathae

Munbae vaa en anbae vaa
Oonae vaa uyirae vaa
Munbae vaa en anbae vaa
Poo poovaai poopom vaa..

Rango rangoli kolangal nee pottai
Kolam pottaval kaigal vaazhi
Valaiyal satham
Jal jal

Rango rangoli kolangal nee pottai
Kolam pottaval kaigal vaazhi
Sunthara malligai
Santhana malligai
Sithira Punnagai vannam minna..

Poo vaithaai poo vaithaai
Nee poovaikoor poo vaithaai
Mana poovaithu poovaithu
Poovaikkul thee vaithaai oohh ohh

Nee nee nee mazhaiyil aada
Naan naan nnan nanainthae vaada
En naanathil un ratham
Naadikkul un satham
Uyire ohoooo

Thozhil oru sila naalil
Thaniyena aanal tharaiyinil meen.hmm..hmm

Munbae vaa en anbae vaa
Oonae vaa uyirae vaa
Munbae vaa en anbae vaa
Poo poovaai poopom vaa..

Munbae vaa en anbae vaa
Poo poovaai poopom vaa..ahhh

Nilavidam vaadagai vaangi
Vizhi veetinil kudi vaikkalaama..?
Naam vaazhum veetukul
Veraarum vanthalae thaguma..?

Then malai thekkukku neethaan..
Unthan thozhgalil idam tharalaama..?
Naan saayum thozhmel
Veraarum sainthalae..thaguma ..?

Neerum senbula cherum
Kalanthathu polae kalanthavar naam..

Munbae vaa en anbae vaa
Oonae vaa uyirae vaa
Munbae vaa en anbae vaa
Poo poovaai poopom vaa..

Naan naana keten ennai naanae
Naan neeya nenjam sonnathae

Munbae vaa en anbae vaa
Oonae vaa uyirae vaa
Munbae vaa en anbae vaa
Poo poovaai poopom vaa..

Rango rangoli kolangal nee pottai
Kolam pottaval kaigal vaazhi
Valaiyal satham
Jal jal

Rango rangoli kolangal nee pottai
Kolam pottaval kaigal vaazhi
Sunthara malligai
Santhana malligai
Sithira Punnagai vannam minna..

Rango rangoli kolangal nee pottai
Kolam pottaval kaigal vaazhi
Valaiyal satham
Jal jal

Rango rangoli kolangal nee pottai
Kolam pottaval kaigal vaazhi
Sunthara malligai
Santhana malligai
Sithira Punnagai vannam minna..`,
  },
  {
    slug: 'nee-kavithaigalaa',
    title: 'Nee Kavithaigalaa',
    language: 'Tamil',
    lyrics: `Nee kavithaigalaa
Kanavugalaa kayalvizhiyae
Naan nigazhvadhuvaa
Kadanthadhuvaa
Badhil mozhiya…

Unnodu nenjam
Uravaadum velai
Thanneer kamalam thaanaa..

Mugam kaattu nee
Muzhu venpani
Oodaathae nee
Yen ellaiyae

Idhazhoramaai
Siru punnagai
Nee kaattadi
En mullaiyae

Mazhaiyodu nanaiyum
Pudhu paadal neethaan
Azhagaana thimirae
Adiyae adiyae…

Kaattrodu paravum
Un vaasam thinamum
Pudhu bothai thaanae
Silaiyae azhagae.

Azhagae…ae…..
Naan unakkenavae
Mudhal pirandhen
Ilangodiyae

Nee enakkenavae
Karam virithaai
En varamae

Mandhaara poopola
Machcham kaanum vela
Ennatha naan solla
Michcham onnum illa

Muzhu madhiyinil
Pani iravinil
Kani pozhudhinil
Oodaathae…

Mugam kaattu nee
Muzhu venpani
Oodaathae nee
Yen ellaiyae

Idhazhoramaai
Siru punnagai
Nee kaattadi
En mullaiyae

Nee kavithaigalaa
Kanavugalaa kayalvizhiyae
Naan nigazhvadhuvaa
Kadanthadhuvaa

Unnodu nenjam
Uravaadum velai
Thanneer kamalam thaanaa..

Mugam kaattu nee
Muzhu venpani
Oodaathae nee
Yen ellaiyae

Idhazhoramaai
Siru punnagai
Nee kaattadi
En mullaiyae

Mugam kaattu nee
Muzhu venpani
Oodaathae nee
Yen ellaiyae

Idhazhoramaai
Siru punnagai
Nee kaattadi
En mullaiyae

Aeee…aaaeee….aaeee…
Ohooo….ooooo…oo….`,
  },
  {
    slug: 'kanavugal',
    title: 'Kanavugal',
    language: 'Tamil',
    lyrics: `கனவுகள் கண்ணில் மலரும்
காலை வெயில் போல் ஒளிரும்
நெஞ்சில் ஒரு பாடல் பிறக்கும்
நேசம் அதில் நிறையும்`,
  },
  {
    slug: 'safar',
    title: 'Safar',
    language: 'Hindi',
    lyrics: `चल पड़ा हूँ मैं एक नए सफ़र पे
ख़्वाबों की राहों में, उम्मीदों के घर पे
हवा कुछ कहती है, धूप मुस्काती है
हर मोड़ पे ज़िंदगी नया गीत गाती है`,
  },
  {
    slug: 're-kabira',
    title: 'Re Kabira - scale A major',
    language: 'Hindi',
    lyrics: `Banno re banno meri chali sasuraal ko
Ankhiyon mein paani de gayi
Duaa mein meethi gud dhaani le gayi [x2]

Re Kabira maan jaa
Re Faqeera yun na ja
Aaja tujhko pukaare teri parchhaaiyan
Re Kabira maan ja
Re Faqeera yun na ja
Kaisa tu hai nirmohi kaisa harjaaiya

Re Kabira, Re Kabira
Re Fakeera, Re Fakeera... [x2]

Tooti chaarpai wohi thandi purvaai rasta dekhe
Doodhoon ki malaai wohi
Mitti ki suraahi rasta dekhe... [x2]

Ho Doodhoon ki malaai wohi
Mitti ki suraahi rasta dekhe...

Gudiya ri gudiya tera gudda perdesiya
Jodi aasmani ho gayi
Shagun pe dekho shaad maani ho gayi [x2]

Re Kabira maan jaa
Re Faqeera yun na jaa
Aaja tujhko pukaare teri parchhaaiyan
Re Kabira maan ja
Re Faqeera yun na ja
Kaisa tu hai nirmohi kaisa harjaaiya

Re Kabira, Re Kabira...`,
  },
  {
    slug: 'tu-jaane-na',
    title: 'Tu Jaane Na',
    language: 'Hindi',
    lyrics: `Kaise Bataaye Kyun Tujhko Chaahe
Yaara Bata Na Paaye
Baatein Dilon Ki Dekho Jo Baaki
Aankhein Tujhe Samjhaaye
Tu Jaane Na Aaa
Tu Jaane Na
Tu Jaane Na Aaa
Tu Jaane Na

Milake Bhi Hum Na Mile
Tumse Na Jaane Kyun
Milon Ke Hai Faasle
Tumse Na Jaane Kyun
Anjaane Hai Silsile
Tumse Na Jaane Kyun
Sapne Hai Palakon Tale
Tumse Na Jaane Kyun

Kaise Bataaye Kyun Tujhko Chaahe
Yaara Bata Na Paaye
Baatein Dilon Ki Dekho Jo Baaki
Aankhein Tujhe Samjhaaye
Tu Jaane Na Aaa
Tu Jaane Na
Tu Jaane Na Aaa
Tu Jaane Na

Nigaahon Mein Dekho Meri
Jo Hai Bas Gaya
Woh Hai Milata Tumse Hubahu
O O O Jaane Teri Aankhein Thi Ya
Baatein Thi Wajah
Huye Tum Jo Dil Ki Aarzoo
Tum Paas Hoke Bhi
Tum Aas Hoke Bhi
Ehsaas Hoke Bhi
Apne Nahi Aise Hai
Humko Gile Tumse Na Jaane Kyun
Milon Ke Hai Faasle
Tumse Na Jaane Kyun
Tu Jaane Na Aaa
Tu Jaane Na
Tu Jaane Na Aaa
Tu Jaane Na

Ooo Jaane Na Jaane Na Jaane Na... aaaaaaaaa aaa
Tu Jaane Na

Khayalon Mein Lakhon Baatein Yun Toh Keh Gayaaaa
Bola Kuch Na Tere Samne
Oooo Hue Na Begaane Bhi Tum Hoke Aur Ke
Dekho Tum Na Mere Hi Bane
Afsos Hota Hai Dil Bhi Yeh Rota Hai
Sapne Sanjota Hai Pagla Hua Soche Yeh
Hum The Mile Tumse Na Jaane Kyun

Meelon Ke Hai Faasle Tumse Na Jaane Kyun
Anjaane Hai Silsale Tumse Na Jaane Kyun
Sapne Hai Palko Tale Tumse Na Jaane Kyun

Hooooooohh

Kaise Bataaye Kyun Tujhko Chaahe
Yaara Bata Na Paaye
Baatein Dilon Ki Dekho Jo Baaki
Aankhein Tujhe Samjhaaye
Tu Jaane Na, Tu Jaane Na
Tu Jaane Na, Tu Jaane Na`,
  },
  {
    slug: 'arz-kiya-hai',
    title: 'Arz Kiya Hai',
    language: 'Hindi',
    lyrics: `Kaayar jo the, woh shaayar bane
Ab kya-kya karein yeh ishq mein
Na kehte the kuch jo, lage khoj mein
Kya lafz chune, naye aashiq yeh

Ishq mein tere hain Faiz bane
Arz kiya hai
Humne bhi likha kuch tere baare mein hai

Aise tu lage ki gulaab hai
Aur aise tu lage ki gulaab hai
Baaghon mein dil ke khilke inn fizaaon mein chhaye ho, haaye
Aur waise hum toh tere hi ghulaam hain
Aur waise hum toh tere hi ghulaam hain
Baadshah dil ke, teri baazi mein jo tu chaahe toh

Doobe dilo ki kya naav banoon?
Main khud tair paaoon na aankhon mein
Shaayar ki fitrat mein hi doobna
Main kya hi ladoon toofano se

Ishq mein tere hain Faiz bane
Arz kiya hai
Humne bhi likha kuch tere baare mein hai

Haathon ko sambhale mere haathon mein
Kaise haathon ko sambhale mere haathon mein
Jab tak neend na aaye, inn lakeeron mein baatein ho, haaye

Sa-re-pa-ga-re-sa, re-ga-pa-ga, pa-ni, pa-ni
Sa-re-pa-ni, pa-ga, pa-ma, ga-ma, ga-re, ga-re, sa-ni-sa
Sa-re-sa-ni-pa-ni, sa-ga-re, re-ga-pa-ni-sa-ga
Ga-re-sa-re-sa-ni, ma-dha-pa
Pa-ni-sa-ni-pa-ni, pa-ga-pa-re-re-sa
Re-ga, re-ga, ma-dha, pa-ni, pa-ni, sa-ni-dha
Sa-ni, sa-ni, pa-dha, pa-ma, ga-ma-ga

Haan, sab ne toh sab keh diya hai
Kya hi kahoon jo abhi bhi ankaha hai
Main, haaye, na Mirza, na Mir
Na maahir, na zaahir karoon kuch naya main
Haaye, par jo bhi likha hai, jiya hai
Haan, jiya hai
Aise, aise, aise kaise? Waise jaise

Jaise main padhoon mere dil mein jo
Meri aankhein bhi padhe teri aankhon ko
Kya yeh mehfil mein baithein ya uthein daud jaane ko? Haaye
Teri aankhon mein taareefon ki talaash hai
Meri mehfil tere jaane se veeraan hai
Main bas shaayar bana hoon sirf tu sun'ne aaye toh

Shaayad shaayar bana hoon
Sirf tu sun'ne aaye toh`,
  },
  {
    slug: 'paani-da-rang',
    title: 'Paani Da Rang',
    language: 'Hindi',
    lyrics: `Paani da rang vekh ke
Paani da rang vekh ke
Paani da rang vekh ke
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de

Mahiya na aaya mera
Mahiya na aaya
Mahiya na aaya mera
Maahiya na aaya
Ranjhna na aaya mera
Mahiya na aaya
Mahiya na aaya mera
Ranjhna na aaya
Ankhaan daa noor vekh ke
Ankhaan daa.. noor vekh ke
Akhiyan jo hanju rul de
Akhiyan jo hanju rul de
Akhiyan jo hanju rul de

Kamli ho gayi tere bina
Aaja raanjhan mere
Kamli ho gayi tere bina
Aaja raanjhan mere
Baarish barkha sab kuch beh gayi
Aaya ni jind mere
Baarish barkha sab kuch beh gayi
Aaya ni jind mere
Ankhaan da noor vekh ke
Ankhaan da.. noor vekh ke
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de

Kothe utte behke ankhiyan milounde
Na jaana hume tu kabhi chhod
Tere utte mar da
Pyaar tenu kar da
Milega tujhe na koi aur
Tu bhi aa sabko chhod ke
Tu bhi aa sabko chhod ke Meri

Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de
Paani da rang vekh ke
Paani da rang vekh ke
Paani da rang vekh ke
Ankhiyan jo hanju rul de

Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de
Ankhiyan jo hanju rul de`,
  },
  {
    slug: 'satranga',
    title: 'Satranga - scale C major',
    language: 'Hindi',
    lyrics: `Ho~ Ho~
Ho~
Aadha Tera Ishq
Aadha Mera
Aise Ho Pura Chandrama
Ho Taara Tera Ikk
Taara Mera
Baki Andhera Aasman
Na Tere Sang Laage
Bandhe Jo Pipal Pe Dhaage
Ye Surme Ke Dhaare
Behte Hai Nazre Bacha Ke
Badrang Mein Satranga Hai
Ye Ishq Re
Jogi Main Aur Ganga
Hai Ye Ishq Re
Badrang Mein Satranga Hai
Ye Ishq Re
Jogi Main Aur Ganga
Hai Ye Ishq Re
Ho~ Ho
Ho~

Mathe Se
Laga Loon Haath
Chhu Ke Main
Pair Tere
Ho Rakh Loon Main
Tan Pe Zakhm
Bana Saare
Bair Tere
Rukna Ni Tu
Hunn Rusna Ni Main
Tera Ni Reha
Te Na Khud Da Vi Main
Duniya Tu Hi Hai Meri
Par Na Aana Ab Na Aana
Main Ni Aana
Shehar Tere

Jo Phere Sang Lage
Rakhte Wo Humko Jala Ke
Wo Waade Jhoothe Waade
Le Ja Tu Kasme Laga Ke
Rag Rag Mein
Malanga
Hai Ye Ishq Re
Kyu Lahu Mein Hi
Ranga Hai Yeh Ishq Re
Ho Badrang Mein Satranga
Hai Ye Ishq Re
Jogi Main Aur Ganga
Hai Ye Ishq Re
Ho Ho~
Ho~
Oooo
Ho Ho~
Ho~
Oooo
Tu Meri Sari Yaade
Pani Mein Aaj Baha De
Ye Teri Bheegi Aankhen
Rakh Loon Labon Se Laga Ke
Main Samandar Parinda
Hai Ye Ishq Re
Mann Maatam Aur Zinda
Hai Ye Ishq Re
Ho Badrang Mein Satranga
Hai Ye Ishq Re
Jogi Main Aur Ganga
Hai Ye Ishq Re~
Ho~~ Ho~~~
Badrang Mein Satranga
Hai Ye Ishq Re
Jogi Main Aur Ganga
Hai Ye Ishq Re~`,
  },
  {
    slug: 'ye-tune-kya-kiya',
    title: 'Ye Tune Kya Kiya',
    language: 'Hindi',
    lyrics: `Ishq woh bala hai
Ishq woh bala hai
Jisko chhuaa isne woh jala hai
Dil se hota hai shuru
Dil se hota hai shuru
Par kambakht sar pe chadha hai
Kabhi khud se, kabhi khuda se
Kabhi zamaane se lada hai
Itna hua badnaam phir bhi
Har zubaan pe ada hai

Ishq ki.. saazishein
Ishq ki.. baaziyaan
Haara main khel ke
Do dilon ka juaa

Kyun tune meri fursat ki
Kyun dil mein itni harqat ki
Ishaq mein itni barqat ki
Ye tune kya kiya..

Phiru ab maara maara main
Chaand se bichhda taara main
Dil se itna kyun haara main
Ye tune kya kiya..

Saari duniya se jeet ke
main aaya hoon idhar
Tere aage hi main haara
kiya tune kya asar

Main dil ka raaz kehta hoon
Ke jab jab saansein leta hoon
Tera hi naam leta hoon
Ye tune kya kiya

Meri baahon ko teri saanson ki jo
Aadatein lagi hain waisi
Jee leta hoon ab main thoda aur

Meri dil ki ret pe
Aankhon ki jo pade parchhai teri
Pee leta hoon tab main thoda aur

Jaane kaun hai tu meri
Main naa jaanu ye magar
Jahaan jaaun main karoon main wahaan
Tera hi zikar

Mujhe tu raazi lagti hai
Jeeti hui baazi lagti hai
Tabiyat taazi lagti hai
Ye tune kya kiya

Main dil ka raaz kehta hoon
Ke jab jab saansein leta hoon
Tera hi naam leta hoon
Ye tune kya kiya

Dil karta hai, teri baatein sunu
Saude main adhoore chunu
Muft ka hua ye faayda
Kyun khud ko main barbaad karoon
Fanaa hoke tunhse miloon
Ishq ka ajab hai qaayda
Teri raahon se jo guzri hain meri dagar
Main aage badh gaya hoon
thoda hoke be-fikar

Kaho toh, kis se marzi loon
Kaho toh, kis ko arzi doon
Hansta ab thoda farzi hoon
Ye tune kya kiya

Main dil ka raaz kehta hoon
Ke jab-jab saansein leta hoon….

Ishq ki.. saazishein
Ishq ki.. baaziyaan
Haara main khel ke
Do dilon ka juaa`,
  },
  {
    slug: 've-kamleya',
    title: 'Ve Kamleya - scale C major',
    language: 'Hindi',
    lyrics: `Ve kamleya, ve kamleya
Ve kamleya, mere naadaan dil
Ve kamleya, ve kamleya
Ve kamleya, mere naadaan dil

Do nainon ke pecheeda sau galiyaare
In mein kho kar tu milta hai kahan
Tujhko ambar se pinjre zyada pyaare
Udd jaa kehne se sunta bhi tu hai kahan

Gal sun le aa, gal sun le aa
Ve kamleya mere naadaan dil
Ve kamleya ve kamleya

Ve kamleya
Mere naadaan dil, naadaan dil

Jaa karna hai toh pyaar kar
Zid poori phir ik baar kar
Kamleya, ve kamleya

Manmarzi kar ke dekh le
Badle mein sab kuchh haar kar
Kamleya, ve kamleya`,
  },
];

export interface LanguageGroup {
  language: string;
  songs: Song[];
}

/** Groups songs by language, both sorted alphabetically. */
export function groupByLanguage(list: Song[] = songs): LanguageGroup[] {
  const groups = new Map<string, Song[]>();
  for (const song of list) {
    const bucket = groups.get(song.language) ?? [];
    bucket.push(song);
    groups.set(song.language, bucket);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([language, items]) => ({
      language,
      songs: [...items].sort((a, b) => a.title.localeCompare(b.title)),
    }));
}

/** Turns a language name into a page-anchor id, e.g. "Malayalam" -> "malayalam". */
export function languageId(language: string): string {
  return language.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
