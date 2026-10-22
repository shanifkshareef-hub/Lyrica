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
    slug: 'alliyambal',
    title: 'Alliyambal',
    language: 'Malayalam',
    lyrics: `അല്ലിയാമ്പൽ
കടവിലന്നരയ്ക്കു വെള്ളം
അന്ന് നമ്മളൊന്നായ്
തുഴഞ്ഞില്ലേ
കൊതുമ്പു വള്ളം
നമ്മുടെ നെഞ്ചിലാകെ
അനുരാഗ
കരിക്കിൻ വെള്ളം
അന്നു നെഞ്ചിലാകെ
അനുരാഗ
കരിക്കിൻ വെള്ളം
താമരപ്പൂ നീ ദൂരെ
കണ്ടു മോഹിച്ചു
അപ്പോൾ താഴെ ഞാൻ നീന്തി
ചെന്നു പൂവുപൊട്ടിച്ചു
പിന്നെ തണ്ടൊടിഞ്ഞ
താമര ഞാൻ
കൊണ്ടു വന്നപ്പോൾ
പെണ്ണെ നിൻ കവിളിൽ
കണ്ടു മറ്റൊരു താമരക്കാട്
പെണ്ണെ നിൻ കവിളിൽ
കണ്ടു മറ്റൊരു താമരക്കാട്
അല്ലിയാമ്പൽ
കടവിലന്നരയ്ക്കു വെള്ളം
അന്നു നമ്മളൊന്നായ്
തുഴഞ്ഞില്ലേ
കൊതുമ്പു വള്ളം
നമ്മുടെ നെഞ്ചിലാകെ
അനുരാഗ
കരിക്കിൻ വെള്ളം
കാടു പൂത്തല്ലോ
ഞാവൽകാ പഴുത്തല്ലോ
ഇന്നും കാലമായില്ലേ
എൻ്റെ കൈ പിടിച്ചീടാൻ
കാടു പൂത്തല്ലോ
ഞാവൽകാ പഴുത്തല്ലോ
ഇന്നും കാലമായില്ലേ
എൻ്റെ കൈ പിടിച്ചീടാൻ
അന്ന് മൂളിപ്പാട്ട് പാടിത്തന്ന
മുളം തത്തമ്മേ
ഇന്നീ ആളൊഴിഞ്ഞ
കൂട്ടിലെന്തേ
വന്നു ചേരാത്ത്
ഇന്നീ ആളൊഴിഞ്ഞ
കൂട്ടിലെന്തേ
വന്നു ചേരാത്ത്
അല്ലിയാമ്പൽ
കടവിലന്നരയ്ക്കു വെള്ളം
അന്ന് നമ്മളൊന്നായ്
തുഴഞ്ഞില്ലേ
കൊതുമ്പു വള്ളം
നമ്മുടെ നെഞ്ചിലാകെ
അനുരാഗ
കരിക്കിൻ വെള്ളം`,
  },
  {
    slug: 'uyire-kavarum',
    title: 'Uyire Kavarum',
    language: 'Malayalam',
    lyrics: `Uyire Kavarum Uyire Pole,
Enthanu Nee Enthanu, Aa!
Kadhal Mazhayaye, Thanuvil Cherum,
Aranu Nee Aranu,
Uyare Chirapol, Pravin Nilavo,
Tharil Madhuvo, Kanan Kanavo,
Nee Kannod Kannod, Kannoramaye,
Kathod Kathod, Kathoramaye,
Nenjod Nenjod, Nenjoramay Niraye,
Nee Thorathe Thorathe, Theeratheyaye,
Mayathe Mayathe, Mayatheyaye,
Ennolum Ninnolum, Ennolamay Padaru,
Oh-Oh! Oh!

Uyire Uyirin, Uyare Moodum
Theeyanu, Nee Theeyanum,
Kadhal Kanalaye, Akame Neerum
Novanu, Nee Novannu,
Iny En Nizhalaye, Vazhvin Nadhiyaye,
Njanen Arike, Ninne Thiraye,
Nee Kannod Kannod, Kannoramay,
Kathod Kathod, Kathoramay,
Nenjod Nenjod, Nenjoramay Niraye,
Nee Thorathe Thorathe, Theeratheyay,
Mayathe Mayathe, Mayatheyay,
Ennolum Ninnolum, Ennolamay Padaru.
Oh-Oh! Oh!`,
  },
  {
    slug: 'njan-kanavil',
    title: 'Njan Kanavil',
    language: 'Malayalam',
    lyrics: `Njan Kanavil Kandoru
Kanmaniyaalivalanallo
Ennullu Thudichathumivale Kananallo
Cheru Poonkula Pole Ivaladumpol Moham
Mrithu Mounam Polum Sangeetham

Perenthaanennariveella
Oorethaanennariveella
Ivalentethanennullam Paadunnu
Oh Mukil Kinavil Minunm Ivalee
Mannil Irangiya Thoominnal
Mazha Thereri Varum Minnal
Njan Kanavil Kandoru
Kanmaniyaalivalanallo
Ennullu Thudichathumivale Kananallo

Chaithram Swapnam
Chalichezhuthiyathanenno
Ushassam Penkidave Ninte Chithram
Chaithram Swapnam
Chalichezhuthiyathanenno
Ushassam Penkidave Ninte Chithram
Ithuvare Enthe Kandilla Njan
Kavilathe Sindhoorathin Ragaparagangal
Ninnile Neehara Bindhuvil Njaan
Sooryanaayi Olichirunne Ennum

Njan Kanavil Kandoru
Snehithan Ivananallo
Ennullu Thudichathum Ivane Kananallo

Sruthiyil Cherum Ivanude Mooka Sallapam
Thennalin Thazhukalennorthu Poyi Njan
Sruthiyil Cherum Ivalude Mooka Sallapam
Thennalin Thazhukalennorthu Poyi Njan
Manassinte Konil Thulumbiyallo
Ee Alola Chundil
Thathiyororeen Thein Thulli
E Viral Thumbile Thalam Polum
Ente Nenjin Ulthudiyaayallo

Njan Kanavil Kandoru
Snehithan Ivananallo
Ennullu Thudichathum Ivane Kananallo
Cheru Poonkula Pole Ivanadumpol Moham
Mrithu Mounam Polum Sangeetham

Perenthaanennariveella
Oorethaanennariveella
Ivanentethanennullam Paadunnu
Oh Mukil Kinavil Minunm Ivanee
Mannil Irangiya Thoominnal
Mazha Thereri Varum Minnal
Njan Kanavil Kandoru
Kanmaniyaalivalanallo
Ennullu Thudichathumivale Kananallooooo`,
  },
  {
    slug: 'oru-kinnara-ganam',
    title: 'Oru Kinnara Ganam',
    language: 'Malayalam',
    lyrics: `Oru kinnara gaanam mooli
Oliykkum kuyilinu vendy paadan
Ambili manath anthi nilave pole
Oru kumbilil niraye koovalam
Muttukal korthu midanjathu neetam
Kaithavarambath ithiri neram nilkam
Parayan ooroh kadhayundeh
Ariyan koodey poramoh
Iniyunde thanka thathamme ho....

Kinnara gaanam mooli oliykkum
Kallanu vendy paadan
Ambili manath anthi nilave pole
Oru kumbilil niraye koovalam
Muttukal korthu midanjathu neetam
Kaithavarambath ithiri neram nilkam

Eath eatho gandharvante odda pullthondil
Paadam.... pathiyey ho

Nakshathrangal naanam
Kollum manikya kattil
Paadam.... ninakkayi ho

Oru kadhal kattayi melle kathil chollamo
Oru kanner muthayi enne tharattamo

Kinnara gaanam mooli oliykkum
Kuyilinu vendy paadan
Ambili manath anthi nilave pole
Oru kumbilil niraye koovalam
Muttukal korthu midanjathu neetam
Kaithavarambath ithiri neram nilkam

Manathe manjil chalich onnu varachallo
Viriyum....viralal ho

Ollam thullum veli
Prayam ninne thottappol
Kasavayi....moodan ho

Oru minnam ponnayi
Mizhiyil minnan porulleh
Oru pootha poovay onnum mindilillelo

Oru kinnara gaanam mooli
Oliykkum kuyilinu vendy paadan
Ambili manath anthi nilave pole
Oru kumbilil niraye koovalam
Muttukal korthu midanjathu neetam
Kaithavarambath ithiri neram nilkam
Parayan ooroh kadhayundeh
Ariyan koodey poramoh
Iniyunde thanka thathamme ho....

Namthannam namthanam tham
Namthannam namthanam tham
Namthannam namthanam tham thaana
Ambili manath anthi nilave pole
Thana thannam namthanam tham
Thana thannam namthanam tham
Thana thannam namthanam tham thaana
Kaithavarambath ithiri neram nilkam`,
  },
  {
    slug: 'mayajalame',
    title: 'Mayajalame',
    language: 'Malayalam',
    lyrics: `Pokaathe Mizhi Nananjidari Thoovathe
Mayathe Manam Pidayumoru Novode

Kannadiyennapol Enne Kandathum
Ninte Kannil Alle
Njaan Thaniye Ninnathum
Koode Vannu Nee
Jeevane Kiyille

Koorirulin Padavil
Munnil Minni Theliya
Ponnin Tharathiriyayi Nee

Vinnil Ninnum Parannen
Nenjin Kombilirunne
Maalakha Poovithale Nee

Mayajalam Mayathengum
Mayajalame Mayathengume

Pokathe Mizhi Nananjidari Thoovathe
Mayathe Manam Pidayumoru Novode

Veruthe Ormmakal
Mazha Nanayum Athil
Theliyum Ninn Mukham
Katha Parayum

Verpadin Venal Eriyunne Athil
Neeyenna Thonnal Kanal Aakum

Omal Thooval Chirakil
Enne Chuttum Chiriye
Kanakkattayi Marayathe

Koode Koodi Thudichum
Padippaadi Paranjum
Mounam Mathram Pakarathe

Mayajalame Mayathengume
Mayajaalame Maayaathengume

Koorirulin Padavil
Munnil Minni Theliyan
Ponnin Tharathiri Aayi Nee

Vinnil Ninnum Parannen
Nenjin Kombil Irunne
Malakha Poovithale Nee

Pokathe Mizhi Nananjidari Thoovathe
Mayathe Manam Pidayumoru Novode`,
  },
  {
    slug: 'kunjikavil-mekhame',
    title: 'Kunjikavil Mekhame',
    language: 'Malayalam',
    lyrics: `കുഞ്ഞിക്കവിൾ മേഘമേ
തുള്ളിത്തുളിമ്പാതെ നീ
പഞ്ഞിച്ചുരുൾ മാനസം
നുള്ളിക്കെടുത്താതെ നീ

വെറുമൊരു തൂവൽകൊണ്ടു മുറിയും
ചെറുമുന നോക്കുകൊണ്ടു വിളറും
ഒരു നേർത്ത പൈതലിന്റെ മുഖമേ
വിങ്ങിപ്പിടയാതെ നീ

വെറുതേ ... വെറുതേ ...
ഈ നൊമ്പരമിതോ വെറുതേ ...

ആ .... ആ ...

വിണ്ണിനാമോ രാവിൽ പുലരാനായ്
പൂവിനാമോ എന്നും, വിടരാനായ്
എഴുതാപ്പുറങ്ങളിൽ പഴിവാക്കൊരായിരം
തിരയരുതേ ... നിൻ കരളിതളോ ...
മൃദുലം തരളം തുടരൂ നടനം

ഒന്നൂടെത്തുടങ്ങാമിനി
വിണ്ണെത്തിപ്പിടിക്കാമിനി
ചുളിവുകളേറെ ഭംഗി പകരും
അനുഭവഗാഥ ചായമെഴുതും
ഉലയാത്ത തേജസ്സിന്റെ മുഖമേ
ഈ മണ്ണിൻ നിധിയാണു നീ`,
  },
  {
    slug: 'podimeesha',
    title: 'Podimeesha',
    language: 'Malayalam',
    lyrics: `പൊടിമീശ മുളക്കണ കാലം
ഇടനെഞ്ചില് ബാൻഡടി മേളം
പൊടിമീശ മുളക്കണ കാലം
ഇടനെഞ്ചില് ബാൻഡടി മേളം
പെരുന്നാളിന് പള്ളിയിലെത്തിയതെന്തു കൊതിച്ചാണ്
അന്നാവഴി വരവിന് കാരണമവളുടെ കരിനീലക്കണ്ണ്
അവളൊരു കൃസ്ത്യാനിപ്പെണ്ണ്
പൊടിമീശ മുളക്കണ കാലം
ഇടനെഞ്ചില് ബാൻഡടി മേളം
അറിയാതേ ഓ
കഥ നാട്ടിലാരുമേ അറിയാതേ
കാറ്റു പോലുമറിയാതേ
അവൾ പോലുമറിയാതേ
മണിമാളികയോടിക്കേറിയതെന്തു കൊതിച്ചാണ്
അവളെ കാണണമൊരു കുറി
കാണണമെന്നൊരു തോന്നലു കൊണ്ടാണ്
അവളാരുടെ പെണ്ണാണ്
പൊടിമീശ മുളക്കണ കാലം
ഇടനെഞ്ചില് ബാൻഡടി മേളം ഉം ഉം
പറയാതേ ഓ
ഒരു വാക്ക് പോലുമേ പറയാതേ
അകലങ്ങൾ മായാതേ
ഇഷ്ടങ്ങൾ പകരാതേ
അവളെങ്ങോ മാഞ്ഞതിലിങ്ങനെ വേദനയെന്താണ്
ആ പുണ്യമനസ്സിലൊളിച്ചു കിടന്നത് ആരുടെ പേരാണ്
അതിനുത്തരമെന്താണ്
പൊടിമീശ മുളക്കണ കാലം
ഇടനെഞ്ചില് ബാൻഡടി മേളം
പെരുന്നാളിന് പള്ളിയിലെത്തിയതെന്തു കൊതിച്ചാണ്
അന്നാവഴി വരവിന് കാരണമവളുടെ കരിനീലക്കണ്ണ്
അവളൊരു കൃസ്ത്യാനിപ്പെണ്ണ്
പൊടിമീശ മുളക്കണ കാലം
ഇടനെഞ്ചില് ബാൻഡടി മേളം`,
  },
  {
    slug: 'mizhikalkkinnenthu-velicham',
    title: 'Mizhikalkkinnenthu Velicham',
    language: 'Malayalam',
    lyrics: `മിഴികൾക്കിന്നെന്തു വെളിച്ചം
മൊഴികൾക്കിന്നെന്തു തെളിച്ചം കാണാമോ....
മിഴികൾക്കിന്നെന്തു വെളിച്ചം
മൊഴികൾക്കിന്നെന്തു തെളിച്ചം കാണാമോ..
ഒരു മായാജാലപ്പെൺകൊടിയായ്
അറിയാതെന്നാത്മാവിൽ തൊട്ടു തൊട്ടിവൾ നിൽക്കുമ്പോൾ
കാണാമോ... കാണാമോ...(മിഴികൾക്കിന്നെന്തു...)

എത്ര കൊതിച്ചിട്ടും കാണാൻ വയ്യല്ലോ
കണ്ടില്ലെന്നാലും കാണാമറത്തവളില്ലേ
എത്ര വിളിച്ചിട്ടും മറുവിളി കേട്ടില്ലാ
കേട്ടില്ലെന്നാലും കാതോരത്തവളില്ലേ
ഒരു തീരാത്ത നൊമ്പരമായ് ഞാൻ എന്നെത്തന്നെ തേടുന്നേരം
ആത്മാവിൻ സാന്ത്വനമായ് വന്നവനേ
പറയൂ ഞാനെവിടെ ഞാനെവിടെ ....(മിഴികൾക്കിന്നെന്തു...)

മൂകരഹസ്യങ്ങൾ ഒരു നാൾ വെളിവാകും
മായിക മൗനങ്ങൾ രാഗാലാപ സ്വരമാകും
ഇഷ്ട വസന്തങ്ങൾ ഇനിയും വരവാകും
വിടരും പൂവുകളിൽ ദേവീ നിൻ രൂപം
ഒരു സ്നേഹത്തിന്നാഴവുമായെന്നരികത്തു നിൽക്കും നിങ്ങടെ
നിന്നുടെയുള്ളിന്നുള്ളിലൊരിടമുണ്ടെങ്കിൽ ഞാനവിടെ
അറിയൂ ഞാനവിടെ ഞാനവിടെ (മിഴികൾക്കിന്നെന്തു...)`,
  },
  {
    slug: 'uyiril-thodum',
    title: 'Uyiril Thodum',
    language: 'Malayalam',
    lyrics: `Uyiril thodum thalir
Viralaavane nee
Arike nadakkane
Alayum
Chudu kaattinu koottinayaay
Naamoru naal
Kina kudilill
Chennanayumiru nilaavalayaay..

Aarum... kaanaa...
Hridaya thaaramathil
Uruki naam anna rum...
Kelkaa... pranaya jaala kadha
Palavoru parayumo

Uyiril thodum kulir
Viralaayidam njan
Arike
Nadannidam
Alayum
Chudu kaattinu koottinayaay
Naamoru naal
Kina kudilill
Chennanayumiru nilavalayaay

Aarum... kaana
Hridaya tharamathil
Uruki namannarum...
Kelkaa... pranaya jala kadha
Palavoru parayumo

Vazhiyorangal thorum
Thanalaayi padarchilla nee
Kudayayi nivarnu nee
Novaaraathe thorathe peyyke
Thuzhayorangal pol nin
Kadavathonnu njan thottu melle

Kaate
Chillayithil veeshane
Kaare
Ilayithill peyyane
Melle
Theeramithi lolangal lolangalaayi
Nee varu...

Uyiril thalodidum
Uyiraayidum naam
Naamoru naal
Kina kadalill
Chennanayumiru nila nadhiyaay

Aarum... kaana
Hridaya thaaramathil
Uruki naam onnaarum
Kelkaa... pranaya jala kadha
Palavoru thudarumo`,
  },
  {
    slug: 'anuragathin-velayil',
    title: 'Anuragathin Velayil',
    language: 'Malayalam',
    lyrics: `Ha...Haa ha haa...Haa...
Haaa

Anuraagathin velayil,
Varamai vannoru sandhyayil
Manamee nee paadu, premardram…

Anuraagathin velayil,
Varamai vannoru sandhyayil
Manamee nee paadu, premardram…
Ulayunnunden nenjakam,
Avalee mannin vismayam
Ini ente mathram, ente mathram…

Anuraagathin velayil,
Varamai vannoru sandhyayil
Manamee nee paadu, premardram…

Nurayumo-rudayadayil…
Nurayumorudayadayil
Marayuvath ninmeyazhako
Kanavilinoru kanivumillathoriniya
Murivo thannu nee
Nirayoo… jeevanil nee nirayu
Anayoo… vijana veedhiyilanayu
Avalen nenjin niswanam, Oo…
Avalee mannin vismayam, Oo…
Kulirunnundee theenaalam
…. Ah…ha….

Anuraagathin velayil,
Varamai vannoru sandhyayil
Manamee nee paadu, premardram…
Ulayunnunden nenjakam,
Avalee mannin vismayam
Ini ente mathram, ente mathram…

Anuraagathin……. , varamai vannoru…….
Manamee nee……. , premardram`,
  },
  {
    slug: 'parayuvan',
    title: 'Parayuvan',
    language: 'Malayalam',
    lyrics: `പറയുവാൻ ഇതാദ്യമായ് വരികൾ മായേ...
മിഴികളിൽ ഒരായിരം മഴവിൽ പോലേ...
ശലഭമായ് പറന്നൊരാൾ അരികിൽ ചേരും...
പതിയെ ഞാൻ തൊടുന്നതും അവളോ മായും...
തീരാതെ ഉള്ളിലിനി ഇളമഞ്ഞിൻ ചൂടേ..
നൂറാണു നിന്റെ ചിറകിനു ചേലെഴും തൂവാലേ...
നീയും ഞാനും പണ്ടേ പണ്ടേ പൂവും വണ്ടും...
തേൻകണങ്ങൾ തിളങ്ങും നേരം പിന്നെയും...

പറയുവാൻ ഇതാദ്യമായ് വരികൾ മായേ...
മിഴികളിൽ ഒരായിരം മഴവിൽ പോലേ...
ശലഭമായ് പറന്നൊരാൾ അരികിൽ ചേരും...
പതിയെ ഞാൻ തൊടുന്നതും അവളോ മായും...

മോതിരം കൈമാറാൻ മനസ്സാലെ മൂളുന്നു സമ്മതം...
താരകൾ മിന്നുന്നു ഇനി നൂറു നൂറായിരം...
ഒരു പൂക്കാലം കൺകളിലാടുന്നൂ...
രാവെതോ വെൺനദിയാവുന്നൂ...
കിനാവുകൾ തുഴഞ്ഞു നാം ദൂരെ ദൂരെയൊ...
നിലാവിതൾ മെനഞ്ഞൊരാ കൂട് തേടിയോ...
ഓ.... ഓ...

പറയുവാൻ ഇതാദ്യമായ് വരികൾ മായേ...
മിഴികളിൽ ഒരായിരം മഴവിൽ പോലേ...
ശലഭമായ് പറന്നൊരാൾ അരികിൽ ചേരും...
പതിയെ ഞാൻ തൊടുന്നതും അവളോ മായും...
ഓ.... ഓ.... ആ....`,
  },
  {
    slug: 'hemanthamen',
    title: 'Hemanthamen',
    language: 'Malayalam',
    lyrics: `ആഹാഹാ ഹാ ആഹാഹാ ഹാ ഹാഹാ
ലാലാലാ ലാലാലാ ലാലാലാ ഉം
ഹേമന്തമെൻ കൈക്കുമ്പിളിൽ തൂവും നിലാപ്പൂവു നീ
പൂങ്കാറ്റുപോൽ നിന്നുള്ളിലെ
പൂഞ്ചില്ല തേടുന്നു ഞാനിതാ
കിളി പാടുന്ന പാട്ടെൻ്റെ കാതിൽ
കളിയോതുന്ന നിൻ വാക്കുപോലെ
അതിലോലം അനുരാഗം തേൻമാരിയായ്
നിൻ്റെ മൗനവും മൊഴിയിഴ തുന്നിയേകവേ
എന്നുമീ വഴി കനവൊടു കാത്തിരുന്നു ഞാൻ
എൻ നിമിഷങ്ങളാനന്ദ ശലഭങ്ങളായ്
ഇന്നലയുന്നു നിന്നോർമ്മയാകെ
നെഞ്ചിന്നൂഞ്ഞാലിൽ മെല്ലെ നിന്നെ
എന്നും താരാട്ടാം ഓമൽ പൂവേ
ആഹാ ഹാഹാഹാ ഹാഹാഹാ ഹ ഹ
ലാലാലാ ലലലാ ലലലാ ല ല ഉം
ഹേമന്തമെൻ കൈക്കുമ്പിളിൽ തൂവും നിലാപ്പൂവു നീ
സനിസ പമഗ പമഗരിസനി
കണ്ണിലായിരം മെഴുതിരി മിന്നിടുന്നപോൽ
മെല്ലെ വന്നു നീ ചിരിമലരാദ്യമേകവേ
നിൻ ശിശിരങ്ങളിഴപെയ്ത പുലർവേളയിൽ
ഞാൻ മഴവില്ലിനിതളായി മാറി
മിന്നൽ കൺചിമ്മും താരം പോലെ
എന്നിൽ ചേരാമോ എന്നും കണ്ണേ
ഹേമന്തമെൻ കൈക്കുമ്പിളിൽ തൂവും നിലാപ്പൂവു നീ
പൂങ്കാറ്റുപോൽ നിന്നുള്ളിലെ
പൂഞ്ചില്ല തേടുന്നു ഞാനിതാ
കിളി പാടുന്ന പാട്ടെൻ്റെ കാതിൽ
കളിയോതുന്ന നിൻ വാക്കുപോലെ
അതിലോലം അനുരാഗം തേൻമാരിയായ്`,
  },
  {
    slug: 'oru-pushpam',
    title: 'Oru Pushpam',
    language: 'Malayalam',
    lyrics: `ഒരു പുഷ്പം മാത്രമെന്‍ പൂങ്കുലയില്‍ നിര്‍ത്താം ഞാന്‍
ഒടുവില്‍ നീയെത്തുമ്പോള്‍ ചൂടിക്കുവാന്‍
ഒരു ഗാനം മാത്രമെൻ‍ - ഒരു ഗാനം മാത്രമെന്‍
ഹൃദയത്തില്‍ സൂക്ഷിക്കാം
ഒടുവില്‍ നീയെത്തുമ്പോള്‍ ചെവിയില്‍ മൂളാന്‍
(ഒരു പുഷ്പം..)

ഒരു മുറി മാത്രം തുറക്കാതെ വെയ്ക്കാം ഞാന്‍
അതിഗൂഢമെന്നുടെ ആരാമത്തില്‍
സ്വപ്നങ്ങള്‍ കണ്ടൂ - സ്വപ്നങ്ങള്‍ കണ്ടൂ
നിനക്കുറങ്ങീടുവാന്‍
പുഷ്പത്തിന്‍ തല്‍പമങ്ങ് ഞാന്‍ വിരിക്കാം
ഒരു പുഷ്പം മാത്രമെന്‍ പൂങ്കുലയില്‍ നിര്‍ത്താം ഞാന്‍
ഒടുവില്‍ നീയെത്തുമ്പോള്‍ ചൂടിക്കുവാന്‍

മലര്‍മണം മാഞ്ഞല്ലൊ മറ്റുള്ളോര്‍ പോയല്ലോ
മമസഖീ നീയെന്നു വന്നു ചേരും
മനതാരില്‍ മാരിക്കാര്‍ മൂടിക്കഴിഞ്ഞല്ലോ
മമസഖീ നീയെന്നു വന്നുചേരും
ഒരു പുഷ്പം മാത്രമെന്‍ പൂങ്കുലയില്‍ നിര്‍ത്താം ഞാന്‍
ഒടുവില്‍ നീയെത്തുമ്പോള്‍ ചൂടിക്കുവാന്‍`,
  },
  {
    slug: 'enthe-innum-vanneela',
    title: 'Enthe Innum Vanneela',
    language: 'Malayalam',
    lyrics: `മയ്യണിക്കണ്ണിന്റെ മഞ്ചാടിക്കടവത്ത് മണിമാരൻ വരുന്നതും കാത്ത് ...
കസ്‌തൂരിനിലാവിന്റെ കനവുപുൽപ്പായയിൽ ഉറങ്ങാതിരുന്നോളേ...
ആ...ആ...ആ‍... ഉറങ്ങാതിരുന്നോളേ...

എന്തേ ഇന്നും വന്നീലാ നിന്നോടൊന്നും ചൊല്ലീലാ
അനുരാഗം മീട്ടും ഗന്ധർവ്വൻ നീ സ്വപ്‌നം കാണും
ആകാശത്തോപ്പിൻ കിന്നരൻ (2) (എന്തേ)
മണിവള തിളങ്ങണ കൈയ്യാലേ
വിരൽഞൊട്ടി വിളിക്കണതാരാണ് (മണിവള)
മുഴുതിങ്കളുദിക്കണ മുകിലോരം
മുരശൊലി മുഴക്കണതാരാണ് (മുഴുതിങ്കൾ)
ഓ... വിളക്കിന്റെ നാളം പോലെ ഈ
പൊൻ‌തൂവൽ വീശും മാറ്റേറും മഴപ്രാവേ...
ഓ... ഓ... കളിയാടി പാടാൻ നേരമായ് ...

എൻ ഹൃദയത്തിൻ ചന്ദനവാതിൽ
നിനക്കായ് മാത്രം തുറക്കാം ഞാൻ (2)
നിൻ മിഴിയാകും മധുപാത്രത്തിലെ (2)
മാസ്‌മരമധുരം നുകരാം ഞാൻ (2)

മധുവർണ്ണപ്പൂവല്ലേ നറുനിലാപ്പൂമോളല്ലേ
മധുരപ്പതിനേഴിൻ ലങ്കിമറിയുന്നോളേ ലങ്കിമറിയുന്നോളേ
ലങ്കിമറിയുന്നോളേ ലങ്കിമറിയുന്നോളേ

നിൻ പ്രണയത്തിൻ താമരനൂലിൽ
ഓർമ്മകൾ മുഴുവൻ കോർക്കാം ഞാൻ (2)
നിന്നെയുറക്കാൻ പഴയൊരു ഗസലിൻ (2)
നിർവൃതിയെല്ലാം പകരാം ഞാൻ (2) (എന്തേ)`,
  },
  {
    slug: 'kaathil-thenmazhayayi',
    title: 'Kaathil Thenmazhayayi',
    language: 'Malayalam',
    lyrics: `കാതിൽ തേന്മഴയായ് പാടൂ കാറ്റേ കടലേ
കാതിൽ തേന്മഴയായ് പാടൂ കാറ്റേ കടലേ
കടൽക്കാറ്റിൻ മുത്തങ്ങളിൽ കരൾ കുളിർത്താരാരോ
മധുരമായ് പാടും മണിശംഖുകളായ്
കാതിൽ തേന്മഴയായ് പാടൂ കാറ്റേ കടലേ
ഒഴുകുന്ന താഴംപൂ മണമിതു നാമിന്നും
പറയാതെയോർത്തിടും അനുരാഗഗാനംപോലെ
ഒഴുകുന്ന താഴംപൂ മണമിതു നാമിന്നും
പറയാതെയോർത്തിടും അനുരാഗഗാനംപോലെ
ഒരുക്കുന്നു കൂടൊന്നിതാ ആ
ഒരുക്കുന്നു കൂടൊന്നിതാ മലർക്കൊമ്പിലേതോ കുയിൽ
കടൽപെറ്റൊരീ മുത്തു ഞാനെടുക്കും
കാതിൽ തേന്മഴയായ് പാടൂ കാറ്റേ കടലേ
കടൽക്കാറ്റിൻ മുത്തങ്ങളിൽ കരൾ കുളിർത്താരാരോ
മധുരമായ് പാടും മണിശംഖുകളായ്
കാതിൽ തേന്മഴയായ് പാടൂ കാറ്റേ കടലേ
തഴുകുന്ന നേരം പൊന്നിതളുകൾ കൂമ്പുന്ന
മലരിൻ്റെ നാണംപോൽ അരികത്തു നിൽക്കുന്നു നീ
ഹാ തഴുകുന്ന നേരം പൊന്നിതളുകൾ കൂമ്പുന്ന
മലരിൻ്റെ നാണംപോൽ അരികത്തു നിൽക്കുന്നു നീ
ഒരു നാടൻപാട്ടായിതാ
ഒരു നാടൻ പ്രേമത്തിൻ്റെ നിലയ്ക്കാത്ത പാട്ടായിതാ
കടൽത്തിരയാടുമീ തീമണലിൽ
കാതിൽ തേന്മഴയായ് പാടൂ കാറ്റേ കടലേ
കടൽക്കാറ്റിൻ മുത്തങ്ങളിൽ കരൾ കുളിർത്താരാരോ
മധുരമായ് പാടും മണിശംഖുകളായ്
കാതിൽ തേന്മഴയായ് പാടൂ കാറ്റേ കടലേ`,
  },
  {
    slug: 'thamarapoovil',
    title: 'Thamarapoovil',
    language: 'Malayalam',
    lyrics: `Thaamarapoovil vaazhum deviyallo nee
Poo nilaakadalil pookkum punyamallo nee.
Thaamarapoovil vaazhum deviyallo nee
Poo nilaakadalil pookkum punyamallo nee.
Ninte thiru nadayil
Naru neythiri kathiraay
Aarumariyaathe ennum
Veenerinjidaam...
Ninte thiru nadayil
Naru neythiri kathiraay
Aarumariyaathe ennum
Veenerinjidaam...
Saandra chandana gandhamaayi
Nee vannu chernnaale...
Saandra chandana gandhamaayi
Nee vannu chernnaale...
Ennumi... sreelakam dhanyamaayidu.
Shyamayaaminiyil nee saamachandrikayaay.
Thaamarapoovil vaazhum deviyallo nee
Poo nilaakadalil pookkum punyamallo nee.
Ninte kaaladiyil
Japa thulasi malar pole.
Sneha manthravumaayi
Njaan koottu ninnidaam...
Ninte kaaladiyil
Japa thulasi malar pole.
Sneha manthravumaayi
Njaan koottu ninnidaam...
Ninte mooka thapasil ninnum
Neeyunarnnaale.
Ninte mooka thapasil ninnum
Neeyunarnnaale.
Mokshavum mukthiyum
Kai varunnullu.
Raaga thamburuvil nee
Bhaava panchamamaayi.
Thaamarapoovil vaazhum deviyallo nee
Poo nilaakadalil pookkum punyamallo nee.
Oooo.mmmmm lala la la la
Thaamarapoovil vaazhum deviyallo nee
Poo nilaakadalil pookkum punyamallo nee.`,
  },
  {
    slug: 'parayathe-ariyathe',
    title: 'Parayathe Ariyathe',
    language: 'Malayalam',
    lyrics: `പറയാതെ അറിയാതെ നീ പോയതല്ലേ
മറുവാക്കു മിണ്ടാഞ്ഞതല്ലേ
ഒരു നോക്ക് കാണാതെ നീ പോയതല്ലേ
ദൂരേക്ക് നീ മാഞ്ഞതല്ലേ ..
ഒരു നോക്ക് കാണാതെ നീ പോയതല്ലേ
ദൂരേക്ക് നീ മാഞ്ഞതല്ലേ ..
സഖിയെ നീ കാണുന്നുവോ
എന്‍ മിഴികള്‍ നിറയും നൊമ്പരം ..
ഇന്നുമോര്‍ക്കുന്നുവോ വീണ്ടുമോര്‍ക്കുന്നുവോ
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..
ഇന്നുമോര്‍ക്കുന്നു ഞാന്‍ എന്നുമോര്‍ക്കുന്നു ഞാന്‍
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..

പറയാതെ അറിയാതെ നീ പോയതല്ലേ
മറുവാക്കു മിണ്ടാഞ്ഞതല്ലേ
ഒരു നോക്ക് കാണാതെ നീ പോയതല്ലേ
ദൂരേക്ക് നീ മാഞ്ഞതല്ലേ ..
പ്രിയനേ നീ അറിയുന്നുവോ
എന്‍ വിരഹം വഴിയും രാവുകള്‍ ..
ഇന്നുമോര്‍ക്കുന്നുവോ വീണ്ടുമോര്‍ക്കുന്നുവോ
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..
ഇന്നുമോര്‍ക്കുന്നു ഞാന്‍ എന്നുമോര്‍ക്കുന്നു ഞാന്‍
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..

കണ്ടു തമ്മില്‍ ഒന്നു കണ്ടു തീരാ മോഹങ്ങള്‍ തേടി നാം
മെല്ലെ സ്വപ്നം പൂവണിഞ്ഞു മായാ വര്‍ണങ്ങള്‍ ചൂടി നാം
ആവര്‍ണമാകവേ വാര്‍മഴവില്ലുപോല്‍ മായുന്നുവോമല്‍ സഖി
ഇന്നുമോര്‍ക്കുന്നുവോ വീണ്ടുമോര്‍ക്കുന്നുവോ
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ്
ഇന്നുമോര്‍ക്കുന്നു ഞാന്‍ എന്നുമോര്‍ക്കുന്നു ഞാന്‍
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ്

കാറും കോളും മായുമെന്നോ
കാണാ തീരങ്ങള്‍ കാണുമോ
വേനല്‍ പൂവേ നിന്റെ നെഞ്ചില്‍
വേളിപൂക്കാലം പാടുമോ
നീ ഇല്ല എങ്കിലെന്‍ ജന്മം ഇന്നെന്തിനായ്‌
എന്‍ ജീവനെ ചോല്ലുമീ ..
ഇന്നുമോര്‍ക്കുന്നുവോ വീണ്ടുമോര്‍ക്കുന്നുവോ
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..
ഇന്നുമോര്‍ക്കുന്നു ഞാന്‍ എന്നുമോര്‍ക്കുന്നു ഞാന്‍
അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..

പറയാതെ അറിയാതെ നീ പോയതല്ലേ മറുവാക്കു മിണ്ടാഞ്ഞതല്ലേ
ഒരു നോക്ക് കാണാതെ നീ പോയതല്ലേ ദൂരേക്ക് നീ മാഞ്ഞതല്ലേ ..
ഒരു നോക്ക് കാണാതെ നീ പോയതല്ലേ ദൂരേക്ക് നീ മാഞ്ഞതല്ലേ ..
സഖിയെ നീ കാണുന്നുവോ എന്‍ മിഴികള്‍ നിറയും നൊമ്പരം ..
ഇന്നുമോര്‍ക്കുന്നുവോ വീണ്ടുമോര്‍ക്കുന്നുവോ അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..
ഇന്നുമോര്‍ക്കുന്നു ഞാന്‍ എന്നുമോര്‍ക്കുന്നു ഞാന്‍ അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..
ഇന്നുമോര്‍ക്കുന്നുവോ വീണ്ടുമോര്‍ക്കുന്നുവോ അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..
ഇന്നുമോര്‍ക്കുന്നു ഞാന്‍ എന്നുമോര്‍ക്കുന്നു ഞാന്‍ അന്നു നാം തമ്മളില്‍ പിരിയും രാവ് ..`,
  },
  {
    slug: 'oru-nokku-kanuvan',
    title: 'Oru Nokku Kanuvan',
    language: 'Malayalam',
    lyrics: `Oru Nokk Kaanuvaan..
Kaathirunnaval Mizhiyakann Poyo..
Oru Kaatt Poleyen..
Koode Vannaval Vazhi Marann Poyo..
Oru Kadhayaay Avalakalum..
Avalude Then Chindhukal..
Novukalaay Padarum..
Alayumoru Kaattin Ithalukalaay..
Vidaparayaan Innendhe ee Vazhiyil..
Vazhi Marayumetho
Nizhalin Viralukalaal..
Arikiloromal Thiriyanayum..
Nimishaamitho..

Parayatheyendhinum Koode Ninnaval
Mozhi Marann Poyo
Idanenjilaayiram Kanaverinjaval
Kadha Marann Poyo
Thari Valakal Avalaniyum
Avalude Kaalpaadumaay
Ee Vazhikal Marayum

Aliyumoru Paattin Madhukanamaay...
Cherukilikal Ini Melle Chirakunarum
Arikiloru Kaattin Chirakukalaal
Priyamezhumomal Kuliraniyum
Pularikalil…`,
  },
  {
    slug: 'nilamalare',
    title: 'Nilamalare',
    language: 'Malayalam',
    lyrics: `അ ആ
നിലാമലരേ നിലാമലരേ
പ്രഭാകിരണം വരാറായി
നിലാമലരേ നിലാമലരേ
പ്രഭാകിരണം വരാറായി
സുഗന്ധം മായല്ലേ
മരന്ദം തീരല്ലേ
കെടാതെൻ നാളമേ
നാളമേ ആളൂ നീ
നിലാമലരേ
നിലാമലരേ
പ്രഭാകിരണം വരാറായി
മഴവിരലിൻ ശ്രുതി ആ
മണലിലൊരു വരി
എഴുതുമോ ഇനി
ഒരു ജലകണം പകരുമോ ഇനി
ഒരു നറുമൊഴി അതുമതി ഇനി
ഈറൻ കാറ്റിൽ പാറി
ജീവോന്മാദം ചൂടി
പോരൂ പൂവിതളേ
നിലാമലരേ നിലാമലരേ
പ്രഭാകിരണം വരാറായി
ആ ആ ആ ആ
നിമിഷശലഭമേ വരൂ വരൂ വരൂ
നിമിഷശലഭമേ മധു നുകരൂ ഇനി
ഉദയകിരണമേ കനകമണിയൂ നീ
ജനലഴികളിൽ കുറുകുമോ കിളി
ഒഴുകുമോ നദി
മരുവിലും ഇനീ
ഏതോ തെന്നൽ തേരിൽ
മാരിപ്പൂവും ചൂടി
പോരൂ കാർമുകിലേ
നിലാമലരേ നിലാമലരേ
പ്രഭാകിരണം വരാറായി`,
  },
  {
    slug: 'kilukil-pambaram',
    title: 'Kilukil Pambaram',
    language: 'Malayalam',
    lyrics: `Kilukil pambaram thiriyum maanasam
Ariyaaathambili mayangu vavavooo
Chamchakom
Chamchakom

Panineer chandrighee iniyee poonkavil
Kuliril melle nee thazhugu vavavooo
Chamchakom
Chamchakom

Meeda manjum moodiyee kunnum poygayum
Paalnilavin shayayil mayangum veelayil
Thaalam poya ninnil meeyum noovumay
Thaane veenurangu thennal kanyake
Thaaragangal thunnumi raavin meenavil
Chamchakom
Chamchakom

Kilukil pambaram thiriyum maanasam
Ariyaaathambili mayangu vavavooo
Chamchakom
Chamchakom

Eethuvavin kouthugam
Mizhiyil vaangi nee
Eethu poovin sourabam
Thanuvil thaangi nee
Thaane ninte oormathan chaayam maanjatho
Kaalam neetha jaalamo maaya jaalamo
Theenju poya thingale vavo vavavoo
Chamchakom
Chamchakom

Panineer chandrighee iniyee poonkavil
Kuliril melle nee thazhugu vavavooo
Chamchakom
Chamchakom
Chamchakom
Chamchakom`,
  },
  {
    slug: 'walking-in-the-moonlight',
    title: 'Walking in the Moonlight',
    language: 'Malayalam',
    lyrics: `ഗഗ ഗപരിസ സനിധസ സരി
ഗഗ ഗധപരിസ സനിധസ സരി
Walking in the moonlight
I am thinking of you
Listening to the rain drops
I am thinking of you
ഇളമാൻ കണ്ണിലൂടെ
I am thinking of you
ഇളനീർ കനവിലൂടെ
I am thinking of you
ഹെയ് സലോമ
ഓ സലോമ
ഓ സലോമ
ഹോ സലോമ
Walking in the moonlight
I am thinking of you
Listening to the rain drops
I am thinking of you
ഇളമാൻ കണ്ണിലൂടെ
I am thinking of you
ഇളനീർ കനവിലൂടെ
I am thinking of you
ഹെയ് സലോമ
ഓ സലോമ
ഹെയ് സലോമ
ഹ സലോമാ ഹാ
ദൂരത്ത് കണ്ടാൽ
അറിയാത്ത ഭാവം
അരികത്ത് വന്നാൽ
ആതിരാ പാൽക്കുടം
മുള്ളുള്ള വാക്ക്
മുനയുള്ള നോക്ക്
കാണാത്തതെല്ലാം
കാണുവാൻ കൗതുകം
ഉലയുന്ന പൂമെയ്
മദനൻ്റെ വില്ല്
മലരമ്പ് പോലെ
നിറമുള്ള നാണം
വിടരുന്ന പനിനീർ പരുവം മനസ്സിനുള്ളിൽ
ഹെയ് സലോമ സലോമ സലോമ
ഹെ ഹെയ് സലോമ സലോമ സലോമ
ഹെയ് സലോമ സലോമ സലോമ
ഹെ ഹെയ് സലോമ സലോമ സലോമ
I am thinking of you
I am thinking of you
ഇളമാൻ കണ്ണിലൂടെ
I am thinking of you
ഇളനീർ കനവിലൂടെ
I am thinking of you
ആആആആ
പതിനേഴിനഴക്
കൊലുസ്സിട്ടകൊഞ്ചൽ
ചിറകുള്ളമോഹം
കൂന്തലിൽ കാർമുകിൽ
നെഞ്ചം തുളുമ്പും മിന്നൽ തിടമ്പ്
മിണ്ടുന്നതെല്ലാം പാതിരാപൂമഴ
ചുണ്ടോട് ചുണ്ടിൽ
നുരയുന്ന ദാഹം
മെയ്യോടു ചേർത്താൽ ആറാട്ടുമേളം
അനുരാഗ മുല്ലപ്പന്തൽ കനവാലെ
ഹെയ് സലോമ സലോമ സലോമ
ഹെ ഹെയ് സലോമ സലോമ സലോമ
ഹെയ് സലോമ സലോമ സലോമ
ഹെ ഹെയ് സലോമ സലോമ സലോമ
ഗഗ ഗപരിസ സനിധസ സരി
ഗഗ ഗധപരിസ സനിധസ സരി
ഇളമാൻ കണ്ണിലൂടെ
I am thinking of you
ഇളനീർ കനവിലൂടെ
I am thinking of you
Walking in the moonlight
I am thinking of you
Listening to the rain drops
I am thinking of you
ഹെയ് സലോമ
ഓ സലോമ
ഹേ സലോമ
ഹാ സലോമാ`,
  },
  {
    slug: 'kallayi-kadavathe',
    title: 'Kallayi Kadavathe',
    language: 'Malayalam',
    lyrics: `കല്ലായി കടവത്തെ കാറ്റൊന്നും മിണ്ടീല്ലെ
മണിമാരൻ വരുമെന്നു ചൊല്ലിയില്ലെ
വരുമെന്നു പറഞ്ഞിട്ടും വരവൊന്നും കണ്ടില്ല
ഖൽബിലെ മൈന ഇന്നും ഉറങ്ങീല്ല
മധു മാസ രാവിൻ വെൺ ചന്ദ്രനായ്‌ ഞാൻ
അരികത്ത്‌ നിന്നിട്ടും കണ്ടില്ലെ നീ കണ്ടില്ലെ
കല്ലായി കടവത്തെ കാറ്റൊന്നും മിണ്ടീല്ലെ
മണിമാരൻ വരുമെന്നു ചൊല്ലിയില്ലെ
പട്ടു തൂവാലയും വാസന തൈലവും
അവൾക്കു നൽകാനായ്‌ കരുതി ഞാൻ
പട്ടുറുമാല്‌ വേണ്ട അത്തറിൻ മണം വേണ്ട
നെഞ്ചിലെ ചൂടു മാത്രം മതി ഇവൾക്ക്‌
കടവത്തു തോണി ഇറങ്ങാം കരിവള കൈ പിടിയ്ക്കാം
അതുകണ്ടു ലാവുപോലും കൊതിച്ചോട്ടെ
കല്ലായി കടവത്തെ കാറ്റൊന്നും മിണ്ടീല്ലെ
മണിമാരൻ വരുമെന്നു ചൊല്ലിയില്ലെ
സങ്കൽപ്പ ജാലകം പാതി തുറന്നിനീ
പാതിരാ മയക്കം മറന്നിരിയ്ക്കാം
തല ചായ്ക്കുവാനായ്‌ നിനക്കെന്നും എൻ്റെ
കരളിൻ്റെ മണിയറ തുറന്നു തരാം
ഇനി എന്തു വേണം എനിയ്ക്കെന്തു വേണമെൻ
ജീവൻ്റെ ജീവൻ കൂടെയില്ലേ
കല്ലായി കടവത്തെ കാറ്റൊന്നും മിണ്ടീല്ലെ
മണിമാരൻ വരുമെന്നു ചൊല്ലിയില്ലെ
വരുമെന്നു പറഞ്ഞിട്ടും വരവൊന്നും കണ്ടില്ല
ഖൽബിലെ മൈന ഇന്നും ഉറങ്ങീല്ല
മധു മാസ രാവിൻ വെൺ ചന്ദ്രനായ്‌ ഞാൻ
അരികത്ത്‌ നിന്നിട്ടും കണ്ടില്ലെ നീ കണ്ടില്ലെ
ഉം ഉം ഉം ആ ആ ആ
ഉം ഉം ഉംഉംഉംഉം`,
  },
  {
    slug: 'pathiramazhayetho',
    title: 'Pathiramazhayetho',
    language: 'Malayalam',
    lyrics: `Paathiraamazhayetho hamsageetham paadi
Veena poovithalengo pin nilaavilalinjooo
Neela vaarmukiloram
Chandra hridayam thengeee.

Paathiraamazhayetho hamsageetham paadi

Koorirul chimizhil
Njaanum mounavum maatram
Minniyulayum vyaamoha jwaalayaalukayay
Ente lokam ...nee maranno....
Ormma polum ...maanju
Pokuvathenthe.... (Paathiraamazha)
Paathiraamazhayetho hamsageetham paadi

Shoonya vedhikayil kandoo
Nin nizhalchandham
Kariyilakkarayay maaree sneha saamrajyam
Ekayay nee poyathevide...

Ormma polum ...maanju
Pokuvathenthe....(Paathiraamazha)

Paathiraamazhayetho hamsageetham paadi
Veena poovithalengo pin nilaavilalinjooo
Neela vaarmukiloram
Chandra hridayam thengeee
Hmm hmm hmm hmm hmm hmm`,
  },
  {
    slug: 'oh-sainaba',
    title: 'Oh Sainaba',
    language: 'Malayalam',
    lyrics: `Oh Sainaba... azhakulla Sainaba..
Ilamaan kidaavu pole
Vannathenthinaanu nee
Oh Sainaba... alivulla Sainaba...
Ariyaathe ente
Jeevanaayathu enthinaanu nee
Maanalla njaan... ilamaanalla njaan...
Ilam thooval kondu
Koodu theerkkum alli payinkili
Oh Sainaba... Sainabaa.... Sainabaa...

Perunnaal nilaavu kondu
Urumaal theertha Sainaba
Njaan arali maala kondu
Ninne kettiyittaalo
Perunnaal nilaavu kondu
Urumaal theertha kaikalaal
Njaan arali maala ninakku
Vendi kortheduthallo
Ini thaarakangale thiru
Saakshiyaaki njaan
Ninne innu swanthamaakkum ente Sainabaa

Oh Sainaba... azhakulla Sainaba...
Ilamaan kidaavu pole
Vannathenthinaanu nee

Anuraaga jaalakam thurannu
Vannathaanu njaan
Mazhamukilukalkku mele
Vanna maarivillu nee
Anuraaga jaalakam thurannu vanna Sainaba
Karimukilukalkku mele
Vanna maarivillu nee
Athirinnalinju poyi... pulakam virinju poyi
Nooru nanma poovaninja
Prayana sandhyayaayi

Oh Sainaba... azhakulla Sainaba..
Ilamaan kidaavu pole
Vannathenthinaanu nee
Maanalla njaan... ilamaanalla njaan...
Ilam thooval kondu
Koodu theerkkum alli payinkili
Oh Sainaba... Sainabaa.... Sainabaa...`,
  },
  {
    slug: 'oru-rajamalli',
    title: 'Oru Rajamalli',
    language: 'Malayalam',
    lyrics: `ഒരുരാജമല്ലി വിടരുന്നപോലെ
ഇതളെഴുതി മുന്നിലൊരു
മുഖം
ഒരുദേവഗാനമുടലാർന്നപോലെ
മനമരുളിയെന്നിലൊരു സുഖം
കറുകനാമ്പിലും
മധുകണം
കവിതയെന്നിലും നിറകുടം
അറിയുകില്ല നീയാരാരോ

ഉണർന്നുവോ മുളം
തണ്ടിലുമീ‍ണം
പൊഴിഞ്ഞുവോ മണിച്ചുണ്ടിലിന്നൊരു തേൻ‌കണം
തനിച്ചുപാടിയ
പാട്ടുകളെല്ലാം
നിനക്കു ഞാനെന്റെ നൈവേദ്യമാക്കി
കൂടെവിടെ
മുല്ലക്കാടെവിടെ
ചെല്ലക്കാറ്റിനോടാക്കഥ പറയുകില്ലേ

തെളിഞ്ഞുവോ കവിൾ
ചെണ്ടിലും നാണം
അലിഞ്ഞുവോ കിളിക്കൊഞ്ചൽകേട്ടെന് നെഞ്ചകം
നിറഞ്ഞുതൂവിയ
മാത്രകളെല്ലാം
നിനക്കായ് വെണ്മണി മുത്തുകളാക്കി
താമരയിൽ
കണിപൂവിതളിൽ
എന്നെ ചേർത്തൊന്നു പുൽകി നീ മയങ്ങുകില്ലേ`,
  },
  {
    slug: 'kannadi-vathil',
    title: 'Kannadi Vathil',
    language: 'Malayalam',
    lyrics: `കണ്ണാടിവാതിൽ നീ തുറന്നുവോ
അഞ്ചാറുപൂക്കൾ നീ എറിഞ്ഞുവോ
നെഞ്ചോടുചേർത്ത് ഞാനുണർന്നുപോയി
അരികേ നിന്നെ കണ്ടീലാ
കണ്ണാടിവാതിൽ നീ തുറന്നുവോ
അഞ്ചാറുപൂക്കൾ നീ എറിഞ്ഞുവോ
നെഞ്ചോടുചേർത്ത് ഞാനുണർന്നുപോയി
അരികേ നിന്നെ കണ്ടീലാ

ഈ മഞ്ഞ്കാലത്തിലേകാന്ത ദാഹത്തിൽ
ആളുന്നു തീയെന്നപോൽ
ഹേമന്തരാവിന്റെ ആഴത്തിൽ നിന്നേതോ
നാളങ്ങളായെന്നിൽ നീ
വെണ്മുകിലേ ..ഓ ..ഓ താണിറങ്ങി വാ
താഴ്‌വരയേ ..ഹാ ..നീ പുണർന്നുവാ
വെണ്മുകിലേ പൂചൊരിഞ്ഞു വാ
തൂമഞ്ഞുമായി വെണ്മുകിലേ ഹേ ഹേയ്
കണ്ണാടിവാതിൽ നീ തുറന്നുവോ
അരികേ നിന്നെ കണ്ടീലാ
നിന്നെ..നിന്നെ..നിന്നെ

സൂചിമുഖീ ജാലങ്ങളാൽ കൈനീട്ടുമീവനങ്ങൾ
ഏതോർമ്മയിൽ ചായുന്നിതാ
ഈറൻ ലതാങ്കുരങ്ങൾ
ഒരേയൊരു പൂവിൻ മൂകസ്മിതം
ഒരായിരം പൂക്കൾ പെയ്യുന്നുവോ
ഒരേയൊരു കാറ്റിൻ ലോലസ്വരം
ഒരായിരം ഗാനം മൂളുന്നുവോ
അനുരാഗമതിലോല മൃദുമന്ത്രമായി
ഉദയാംശു ചൊരിയുന്നുവോ

വെണ്മുകിലേ ..ഓ ..ഓ താണിറങ്ങി വാ
താഴ്‌വരയേ ..ഹാ ..നീ പുണർന്നുവാ
വെണ്മുകിലേ പൂചൊരിഞ്ഞു വാ
തൂമഞ്ഞുമായി വെണ്മുകിലേ ഹേ ഹേയ്

വെൺപ്രാവുകൾ പാറുന്നൊരി
ആകാശ മൗനങ്ങളിൽ
പൊൻ പൈനുകൾ കൈകോർക്കുമീ
ഉല്ലാസ തീരങ്ങളിൽ
ഹോ വരാനൊരുങ്ങുന്ന പൂക്കാലമേ
വിലോല സായാഹ്ന സൗവർണ്ണമേ
മനോമരാളങ്ങൾ നീന്തുന്നിതാ
സരോവരങ്ങൾ തൻ ഓളങ്ങളിൽ
പ്രണയാർദ്രമൊരുഭാവ സങ്കീർത്തനം
ഹൃദയത്തിലുണരുന്നുവോ

കണ്ണാടിവാതിൽ നീ തുറന്നുവോ
അഞ്ചാറുപൂക്കൾ നീ എറിഞ്ഞുവോ
നെഞ്ചോടുചേർത്ത് ഞാനുണർന്നുപോയി
അരികേ നിന്നെ കണ്ടീലാ
നിന്നെ..നിന്നെ..നിന്നെ..
ഈ മഞ്ഞ്കാലത്തിലേകാന്ത ദാഹത്തിൽ
ആളുന്നു തീയെന്നപോൽ
ഹേമന്തരാവിന്റെ ആഴത്തിൽ നിന്നേതോ
നാളങ്ങളായെന്നിൽ നീ
വെണ്മുകിലേ ..ഓ ..ഓ താണിറങ്ങി വാ
താഴ്‌വരയേ ..ഹാ ..നീ പുണർന്നുവാ
വെണ്മുകിലേ പൂചൊരിഞ്ഞു വാ
തൂമഞ്ഞുമായി വെണ്മുകിലേ ഹേ ഹേയ്`,
  },
  {
    slug: 'thanga-manasu',
    title: 'Thanga Manasu',
    language: 'Malayalam',
    lyrics: `തങ്കമനസ്സ് അമ്മ മനസ്സ്
മുറ്റത്തെ തുളസി പോലെ
ഈ തിരുമുന്നിൽ വന്നു നിന്നാൽ ഞാൻ
അമ്പാടിപ്പൈക്കിടാവ്
കോടിപ്പാവുടുത്ത് കണിത്താലവുമായ്
വിഷുക്കൈനേട്ടമെൻ കൈയ്യിൽ തരുമ്പോൾ
എൻ്റെ മിഴി രണ്ടും നിറയും ഞാൻ
തൊഴുതു കാലിൽ വീഴും
തങ്കമനസ്സ് അമ്മ മനസ്സ്
മുറ്റത്തെ തുളസി പോലെ
ഈ മുറ്റത്തെ തുളസി പോലെ
ഉം
സിന്ദൂരപൊട്ടു തൊടുമ്പോൾ
ഈ നല്ല നെറ്റിയിലെന്നും സൂര്യനുദിച്ചിരുന്നു
പണ്ടെന്നും സൂര്യനുദിച്ചിരുന്നു
വാത്സല്യ തിരയിളകും ഈ സ്നേഹകടലിലെന്നും
ചിപ്പി വിളയുമല്ലോ കരുണ തൻ മുത്തു പൊഴിയുമല്ലോ
ഓണ നിലാവല്ലേ അമ്മയെന്നും നന്മ മലരല്ലേ
ആരെ കണ്ടാലും അവരെല്ലാം അമ്മയ്ക്ക് കുഞ്ഞുങ്ങൾ
ഞാനും ഈ അമ്മയ്ക്ക് പൊന്നുണ്ണി
എന്നും പൊന്നുണ്ണി
തങ്കമനസ്സ് ഈ അമ്മ മനസ്സ്
മുറ്റത്തെ തുളസി പോലെ
ഈ മുറ്റത്തെ തുളസി പോലെ
ധ രി ന ധി ര ന ന ധ രി ന ധി ര ന
ഉം
നാനാഴി കനവിനുള്ളിൽ നാഴൂരി പുഞ്ചിരിയുണ്ട്
നാവോർക്കുടം പോലെ കൊഞ്ചിവരും നാമക്കിളികളുണ്ട്
അമ്മയ്ക്ക് കൂട്ടു നടക്കാൻ പുന്നാര പൈക്കളുണ്ട്
അക്കരെ ഇക്കരെയ്ക്ക് കടത്തിനൊരമ്പിളി തോണിയുണ്ട്
വീടേ വീടെന്ന് മൊഴിയിൽ നാടേ നാടേന്ന്
ആരുണ്ടെന്നാലും അമ്മ തൻ കൂടെ ഞാനുണ്ട്
നിഴലായ് രാപ്പകൽ കൂടെ ഞാനുണ്ട്
എന്നും ഞാനുണ്ട്
തങ്കമനസ്സ് അമ്മ മനസ്സ്
മുറ്റത്തെ തുളസി പോലെ
ഈ തിരുമുന്നിൽ വന്നു നിന്നാൽ ഞാൻ
അമ്പാടിപ്പൈക്കിടാവ്
കോടിപ്പാവുടുത്ത് കണിത്താലവുമായ്
വിഷുക്കൈനേട്ടമെൻ കൈയ്യിൽ തരുമ്പോൾ
എൻ്റെ മിഴി രണ്ടും നിറയും ഞാൻ
തൊഴുതു കാലിൽ വീഴും
തങ്കമനസ്സ് അമ്മ മനസ്സ്
മുറ്റത്തെ തുളസി പോലെ
ഈ തിരുമുന്നിൽ വന്നു നിന്നാൽ ഞാൻ
അമ്പാടിപ്പൈക്കിടാവ്
ഞാൻ അമ്പാടിപ്പൈക്കിടാവ്`,
  },
  {
    slug: 'enthane-mounam',
    title: 'Enthane Mounam',
    language: 'Malayalam',
    lyrics: `എന്താണീ മൗനം മായാനായ് മാത്രം
എന്താണെന്താണിന്നെന്താണ്
എന്താണീ മേഘം തോരാതെ പെയ്യാൻ
എന്താണെന്താണിന്നെന്താണ്
നാമൊന്നാകും ഈ രാവിൻ തീരത്ത്
പൊൻതാരങ്ങൾ കൂടേറുന്നു
ആരാരോ ആരാരോ ആലോലം പാടുന്നൂ
ആകാശം നെഞ്ചിൽ ചായുന്നൂ
ആരാരും കാണാതെ ആരോമൽ പൂന്തിങ്കൾ
ആരാരിനുള്ളം തേടുന്നൂ
എന്താണീ മൗനം മായാനായ് മാത്രം
എന്താണെന്താണിന്നെന്താണ്
എന്താണീ മേഘം തോരാതെ പെയ്യാൻ
എന്താണെന്താണിന്നെന്താണ്
ഒരു നോവിൻ കടവത്ത്
തിരി താഴും നേരത്ത്
ചെറുവെട്ടം നീട്ടാൻ ആരാരോ
തുടി കൊട്ടും മഴയത്ത്
തണുവേറും കാറ്റത്ത്
പിരിയാതെ കൂട്ടായ് ആരാരോ
പൊയ്പ്പോയ രാഗങ്ങൾ ഒന്നാകെ തേടാം
പാടാനൊരായിരം കാവ്യങ്ങളാകാം
എങ്ങെങ്ങോ പോയി മായാ മൗനം
ആരാരോ ആരാരോ ആലോലം പാടുന്നൂ
ആകാശം നെഞ്ചിൽ ചായുന്നൂ
ആരാരും കാണാതെ ആരോമൽ പൂന്തിങ്കൾ
ആരാരിനുള്ളം തേടുന്നൂ
ആരാരോ ആരാരോ ആലോലം പാടുന്നൂ
ആകാശം നെഞ്ചിൽ ചായുന്നൂ (ആ)
ആരാരും കാണാതെ ആരോമൽ പൂന്തിങ്കൾ
ആരാരിനുള്ളം തേടുന്നൂ (ആ)`,
  },
  {
    slug: 'oru-vaakku-mindathe',
    title: 'Oru Vaakku Mindathe',
    language: 'Malayalam',
    lyrics: `ധും തനാനന ധുംതന ധുംതന ധുതനാ ധുംനാ..
ധും തനാനന ധുംതന ധുംതന ധുതനാ ധുംനാ..

ഒരു വാക്കു മിണ്ടാതെ ഒരു നോക്കു കാണാതെ
കാട്ടുചെമ്പക ചോട്ടില്‍ നിന്ന കാറ്റിതെങ്ങു പോയ്
പൂങ്കാറ്റിതെങ്ങു പോയ്...
(ഒരു വാക്കു മിണ്ടാതെ..)

തിനവയല്‍ കരയില്‍ ഇളവെയിൽ കതിര്
പുളിയിലക്കരയാല്‍ പുടവനെയ്യുമ്പോള്‍
പുലരി മഞ്ഞു നനഞ്ഞു നിന്നൊരു
പവിഴ മലരിനു നല്‍കുവാന്‍
ഒരു മുഴം...
ഒരു മുഴം പൂഞ്ചേല വാങ്ങാന്‍ പോയ് കുളിരിളം കാറ്റ്
(ഒരു വാക്കു മിണ്ടാതെ..)

തളിരില കുടിലില്‍ കിളികള്‍ കുറുകുമ്പോൾ
നിറനിലാ കതിരിന്‍ തിരി തെളിയുന്നു
ഹൃദയമൊന്നു പിടഞ്ഞ കണ്ണുകള്‍
മഴനിലാവിലലിയവേ
ഒരു മുഖം...
ഒരു മുഖം ഞാന്‍ നോക്കി നിന്നേ പോയ്...
കൊതി തീരുവോളം...
(ഒരു വാക്കു മിണ്ടാതെ..)`,
  },
  {
    slug: 'kinavu-kondoru',
    title: 'Kinavu Kondoru',
    language: 'Malayalam',
    lyrics: `Kinavu Kondoru Kalimuttam
Vidhoorametho Desham .....
Aa Kinavilarthirambumo.. Naale
Oru Nalla Lokam Namalkkay

Nale Varishakalamayi Naam
Nirayumo Manam,Perum
Kadal Kadannu Kaatakumo
Valarumo Adirezhatha Vayalil
Kathirolikal pol
Pakarumo Pala jalangal Kalarum
Kulirurava pol nammal thammil

Kuttiruttathu choottayi minnum
Thara pol
Vindadarunna Maninittu Megham pol
Kooderinja Pakshikku Vinnil Chilla pol
Tharumo Kinavabhayam

Kuttiruttathu choottayi minnum
Thara pol
Vindadarunna Maninittu Megham pol
Kooderinja Pakshikku Vinnil Chilla pol
Tharumo Kinavabhayam

Kinavu Kondoru Kalimuttam
Vidhoorametho Desham .....
Aa Kinavilarthirambumo.. Naale
Oru Nalla Lokam Namalkkay

Valarumo Adirezhatha Vayalil
Kathirolikal pol
Pakarumo Pala jalangal Kalarum
Kulirurava pol nammal thammil`,
  },
  {
    slug: 'sayyave',
    title: 'Sayyave',
    language: 'Malayalam',
    lyrics: `Kannum kannum nenjil,
Swapna koodorukkunnu...
Mounam polum melle, sneham kaimaarunnu
Manjil thooval thumbil,
Sooryan chinni maayunnu
Thammil thammil nammal mohathererunnu
Ethra janmangalil, ethra swapnangalil
Ethra naalayi kothichu njan ee nimisham

Sayyaave, sayyaave sayyaave sayyaave..
Sayyaave, sayyaave sayyaave sayyaave..

Kannum kannum nenjil,
Swapna koodorukkunnu...
Mounam polum melle, sneham kaimaarunnu

Pandetho raajyathe, raajakumaarikk
Manthrikuamaranod ishtamaayi
Kaanuvaan polum anuvaadamillennalum
Aaradhanayodaval irunnu
Premayaamangalthan, Saandra nimishangalil
Swara-raaga-laya-raavin swayamvaramaay

Sayyaave, sayyaave sayyaave sayyaave..`,
  },
  {
    slug: 'mizhiyoram-manjil-virinja-poovu',
    title: 'Mizhiyoram (Manjil Virinja Poovu)',
    language: 'Malayalam',
    lyrics: `മിഴിയോരം ഉം..ഉം...
പനിനീർമണിയോ
കുളിരോ ഉം..ഉം...
പറയൂ നീ ഇളംപൂവേ
മിഴിയോരം നിലാവലയോ
പനിനീർ മണിയോ കുളിരോ
മഞ്ഞിൽവിരിഞ്ഞ പൂവേ
പറയൂ നീ ഇളംപൂവേ

ശിശിരങ്ങൾ കടം വാങ്ങും
ഓരോ രജനീയാമം (2)
എങ്ങോ കൊഴിയും നേരം
എന്തേ ഹൃദയം തേങ്ങീ
മഞ്ഞിൽ വിരിഞ്ഞ പൂവേ
പറയൂ നീ ഇളം പൂവേ
മിഴിയോരം നിലാവലയോ
പനിനീർ മണിയോ കുളിരോ
മഞ്ഞിൽ വിരിഞ്ഞ പൂവേ
പറയൂ നീ ഇളംപൂവേ

ശലഭങ്ങൾ സ്വരം മൂളും
എതോമുരളീ ഗാനം (2)
നിറയും സുരഭീമാസം
ഇനിയും വരുമോ വീണ്ടും
മഞ്ഞിൽ വിരിഞ്ഞ പൂവേ
പറയൂ നീ ഇളംപൂവേ
മിഴിയോരം നിലാവലയോ
പനിനീർ മണിയോ കുളിരോ
മഞ്ഞിൽ വിരിഞ്ഞ പൂവേ
പറയൂ നീ ഇളംപൂവേ`,
  },
  {
    slug: 'mizhiyoram-kadha-thudarum',
    title: 'Mizhiyoram (Kadha Thudarum)',
    language: 'Malayalam',
    lyrics: `മിഴിയോരം നനയുകയോ
മനമെങ്ങോ ഒഴുകുകയോ
ഒരു കൂട്ടം കഥകളുമായ്
ഇളംകാറ്റിൽ ഇടവഴിയിൽ
ഒരുകാലം തിരികെ വരും
ചെറുതൂവൽച്ചിരി പകരും
തലോടും താനേ കഥ തുടരും

മിഴിയോരം നനയുകയോ
മനമെങ്ങോ ഒഴുകുകയോ

കരുതലായ് കണ്ണിലലിവുമായ്
വന്നുവോ അരികെ
മഴനിലാത്തിങ്കളുയിരുപോൽ
ചേർന്നുവോ അകമേ

വാനവില്ല് നീയേ മനമുകിൽ മേലേ
താരകംപോൽ കണ്മണികൾ
നാം നടന്ന കാലം അതിശയജാലം
പലവഴിയേറുകയേ
കനലു തൂവും വേനൽ മധുരമാകുന്നേ
ദൂരം തേടിടുന്നേ

മിഴിയോരം നനയുകയോ
മനമെങ്ങോ ഒഴുകുകയോ

നേരോർമ്മകൾ തേനോർമ്മകൾ
മായാതെയെൻ നെഞ്ചോരമേ
നേരോർമ്മകൾ തേനോർമ്മകൾ
കണ്ണീരിലും പൊൻനാളമായ്`,
  },
  {
    slug: 'kaantha-njanum-varam',
    title: 'Kaantha Njanum Varam',
    language: 'Malayalam',
    lyrics: `Kaanthaa njanum varaam...
Thrissuur pooram kaanaan...

Kaanthaa njanum varaam...
Thrissuur pooram kaanaan...

Kaanthaa njanum varaam...
Thrissuur pooram kaanaan...

Pooram enikonnu kaananam kaanthaa....
Pooram enikonnu kaananam kaanthaa....

Pooramenikonnu koodanam kaanthaa...
Pooramenikonnu koodanam kaanthaa...

Thimila enikonnu kaananam kaanthaa...
Thimila enikonnu kaananam kaanthaa...

Thimila enikonnu kottanam kaanthaa
Thimila enikonnu kottanam kaanthaa

Kaanthaa njanum varaam...
Thrissuur pooram kaanaan...

Maddalam enikonnu kaananam kaanthaa...
Maddalam enikonnu kaananam kaanthaa...

Maddalam enikonnu kottanam kaanthaa...
Maddalam enikonnu kottanam kaanthaa...

Vedikettu enikonnu kaananam kaanthaa...
Vedikettu enikonnu kaananam kaanthaa...

Vedikutti athilonnu koluthanam kaanthaa
Vedikutti athilonnu koluthanam kaanthaa

Kaanthaa njanum varaam...
Thrissuur pooram kaanaan...

Kaanthaa njanum varaam...
Thrissuur pooram kaanaan...`,
  },
  {
    slug: 'chemboove-poove',
    title: 'Chemboove Poove',
    language: 'Malayalam',
    lyrics: `ചെമ്പൂവേ പൂവേ നിറമാറത്തെ ചെണ്ടേലൊരു വണ്ടുണ്ടോ
ചാന്തേറും ചുണ്ടിൽ ചുടുമുത്താരം മുത്താനൊരു മുത്തുണ്ടേ
ചിരി ചിലമ്പുലഞ്ഞു ചമയങ്ങളഴിഞ്ഞു ഓ...
കളത്തിലെ തളത്തിൽ നിലവിളക്കണഞ്ഞു ഹോ...
മിഴി കൊണ്ടു മിഴികളിൽ ഉഴിയുമോ
നനയുമെൻ നിറുകയിൽ നറുമണം തൂകാമോ
ചെമ്പൂവേ പൂവേ നിറമാറത്തെ
ചെണ്ടേലൊരു വണ്ടുണ്ടോ
ചാന്തേറും ചുണ്ടിൽ ചുടുമുത്താരം
മുത്താനൊരു മുത്തുണ്ടേ
അന്തിച്ചോപ്പു മായും മാനത്താരോ മാരിവില്ലിൻ തൊങ്ങൽ തൂക്കും
നിൻ്റെ ചെല്ലക്കാതിൽ കുഞ്ഞിക്കമ്മലെന്നൊണം
തങ്കതിങ്കൾ നുള്ളി പൊട്ടും തൊട്ട്, വെണ്ണിലാവിൽ കണ്ണും നട്ട്
നിന്നെ ഞാനീ വാകച്ചോട്ടിൽ കാത്തിരിക്കുന്നു
തേൻ കിനിയും തെന്നലായ് നിന്നരികെ വന്നു ഞാൻ
കാതിലൊരു മന്ത്രമായ് കാകളികൾ മൂളവേ
നാണം കൊണ്ടെൻ നെഞ്ചിൽ താഴം പൂവോ തുള്ളി
ആരും കേക്കാതുള്ളിൽ മാടപ്രാവോ കൊഞ്ചി
ആലോലം കിളി മുത്തേ വാ ആതിരരാവിലൊരമ്പിളിയായ്
ചെമ്പൂവേ പൂവേ നിറമാറത്തെ ചെണ്ടേലൊരു വണ്ടുണ്ടോ
ചാന്തേറും ചുണ്ടിൽ ചുടുമുത്താരം മുത്താനൊരു മുത്തുണ്ടേ
അല്ലിത്താമരപ്പൂചെപ്പിൽ തത്തി
താരകത്തിൻ കൊമ്പും നുള്ളി
താണിറങ്ങും പൂന്തേൻ തുമ്പി മാറി നിന്നാട്ടേ
എന്നും നിൻ്റെയുള്ളിൽ തുള്ളി തൂകും, കുഞ്ഞു വെള്ളി കിണ്ണത്തിൽ നീ
കാച്ചി വെയ്ക്കും ചെല്ലപ്പൈമ്പാൽ ഞാൻ കുടിച്ചോട്ടേ
പീലിമുടിയാടുമീ നീലമയിൽ കാൺകിലോ
മേലേ മുകിൽ ചായവേ നേരമിരുളാകയോ
നാടൻ കന്നിപ്പെണ്ണേ നാണിക്കാതെൻ പൊന്നേ
താഴെക്കാവിൽ നാളേ വേളിത്താലം വേണ്ടേ
പായാരം കളി ചൊല്ലാതെ
പുഞ്ചിരി പൊതിയാൻ ചിഞ്ചിലമായ്
ചാന്തേറും ചുണ്ടിൽ ചുടുമുത്താരം മുത്താനൊരു മുത്തുണ്ടേ
ചെമ്പൂവേ പൂവേ നിറമാറത്തെ ചെണ്ടേലൊരു വണ്ടുണ്ടോ
കളത്തിലെ തളത്തിൽ നിലവിളക്കണഞ്ഞു ഹോ...
ചിരി ചിലമ്പുലഞ്ഞു ചമയങ്ങളഴിഞ്ഞു ഓ...
മിഴി കൊണ്ടു മിഴികളിൽ ഉഴിയുമോ
നനയുമെൻ നിറുകയിൽ നറുമണം തൂകാമോ
ചെമ്പൂവേ പൂവേ നിറമാറത്തെ ചെണ്ടേലൊരു വണ്ടുണ്ടോ
ചാന്തേറും ചുണ്ടിൽ ചുടുമുത്താരം മുത്താനൊരു മുത്തുണ്ടേ`,
  },
  {
    slug: 'vaathil-melle',
    title: 'Vaathil Melle',
    language: 'Malayalam',
    lyrics: `വാതിൽ മെല്ലെ തുറന്നൊരു നാളിൽ അറിയാതെ
വന്നെൻ ജീവനിലേറിയതാരോ?
കാറ്റിൽ കണ്ണിമതെല്ലടയാതെ കൊതിയോടെ
എന്നും കാവലിരിക്കുവതാരോ?
ഒരു നാളും പിണങ്ങാതെ എന്നോടൊന്നും ഒളിക്കാതെ
ഒരുമിച്ചു കിനാവുകൾ കാണുവതാരോ?
കള്ളങ്ങൾ പറഞ്ഞാലും നേരെന്താണെന്നറിഞ്ഞാലും
നിഴലായി കൂടെ നടക്കുവതാരോ?
വാതിൽ മെല്ലെ തുറന്നൊരു നാളിൽ അറിയാതെ
വന്നെൻ ജീവനിലേറിയതാരോ?
കാറ്റിൽ കണ്ണിമതെല്ലടയാതെ കൊതിയോടെ
എന്നും കാവലിരിക്കുവതാരോ?
കഥയിലോ കവിത എഴുതിയോ
പ്രണയം പകരുവാൻ കഴിയുമോ?
മനസിനതിരുകൾ മായും അനുഭവം
അത് പറയുവാൻ കഴിയുമോ?
ഓർക്കാതെ ഓരോന്നോതി നിന്നെ ഞാൻ നോവിച്ചാലും
മിണ്ടാതെ കണ്ണിൽ നോക്കി പുഞ്ചിരിച്ച സഖി
ഞാൻ തേടാതെന്നെ തേടി എന്നോരം വന്നില്ലേ നീ
വരുമെന്നൊരു വാക്കും ചൊല്ലാതെ
വാതിൽ മെല്ലെ തുറന്നൊരു നാളിൽ അറിയാതെ
വന്നെൻ ജീവനിലേറിയതാരോ?
കാറ്റിൽ കണ്ണിമതെല്ലടയാതെ കൊതിയോടെ
എന്നും കാവലിരിക്കുവതാരോ?
പറയുവാൻ കുറവ് പലതുമേ
നിറയുമൊരു വെറും കണിക ഞാൻ
കരുതുമളവിലും ഏറെ അരുളിയോ
അനുരാഗമെന്നുയിരിൽ നീ?
ഞാനെന്നെ നേരിൽ കാണും കണ്ണാടി നീയായി മാറി
അപ്പോഴും തെല്ലെൻ ഭാവം മാറിയില്ല സഖി
എന്നിട്ടും ഇഷ്ട്ടം തീരാതിന്നോളം നിന്നില്ലെ നീ
വരുമെന്നൊരു വാക്കും ചൊല്ലാതെ
വാതിൽ മെല്ലെ തുറന്നൊരു നാളിൽ അറിയാതെ
വന്നെൻ ജീവനിലേറിയതാരോ?
കാറ്റിൽ കണ്ണിമതെല്ലടയാതെ കൊതിയോടെ
എന്നും കാവലിരിക്കുവതാരോ?
ഒരു നാളും പിണങ്ങാതെ എന്നോടൊന്നും ഒളിക്കാതെ
ഒരുമിച്ചു കിനാവുകൾ കാണുവതാരോ?
കള്ളങ്ങൾ പറഞ്ഞാലും നേരെന്താണെന്നറിഞ്ഞാലും
നിഴലായി കൂടെ നടക്കുവതാരോ?`,
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
    slug: 'kadhaippoma',
    title: 'Kadhaippoma',
    language: 'Tamil',
    lyrics: `{Dhirana dhiranam dhirana
Dhirana dhiranam dhirana
Thananam thananam thananam thana
Tharinina thaa naaa naa} (2)
Thananam thananam thananam thana
Tharinina thaa naaa naa

Hmm mmm mm mm mm
Naetru naan unnai paartha paarvai veru
Neengaadha ennam aaga aanaai indru
Unnodu naanum pona dhooram
Yaavum nenjilae
Reengaara ninaivugalaaga alaiyai
Ingae minjudhae
Noolarundha pattam polae
Unnai sutri naanum aada
Kaigal neeti neeyum pidikka kaathirukkiren

Idharkellaam arthanagal enna
Kekka vendum unnai
Kaalam kai koodinal

Kadhaippomaa kadhaippomaa
Kadhaippomaa
Ondraaga neeyum naanum dhaan
Kadhaippomaa kadhaippomaa
Kadhaippomaa
Nee pesa pesa kaayam aarumae

Adhikaalai vandhaal
Azhagaai en vaanil nee
Anaiyaadha suriyan aagiraai
Nedu neram kaaindhu
Kadha kadhappu thandhavudan
Nilavaai urumaari nirkkiraai

Unnai indru paarthadhum
Ennai naanae ketkkiren
Vairam ondrai kaiyil vaithu
Engae thaedi alainthaaiyo

Unmai endru therinthumae
Nenjam solla thayangudhae
Kaigal korthu pesinaalae
Dhairiyangal thondrumae

Kadhaippomaa kadhaippomaa
Kadhaippomaa (Kadhaippomaa)
Ondraaga neeyum naanum dhaan
Kadhaippomaa (Kadhaippomaa)
Kadhaippomaa (Kadhaippomaa)
Kadhaippomaa
Nee pesa pesa kaayam aarumae

Kadhaippomaa (Kadhaippomaa)
Kadhaippomaa (Kadhaippomaa)
Kadhaippomaa

{Dhirana dhiranam dhirana
Dhirana dhiranam dhirana
Thananam thananam thananam thana
Tharinina thaa naaa naa} (2)
Thananam thananam thananam thana
Tharinina thaa naaa naa

Kadhaippomaa kadhaippomaa
Kadhaippomaa
Ondraaga neeyum naanum dhaan
Kadhaippomaa kadhaippomaa
Kadhaippomaa
Nee pesa pesa kaayam aarumae`,
  },
  {
    slug: 'ennavale',
    title: 'Ennavale',
    language: 'Tamil',
    lyrics: `Mmm mmm mmm mmm mmm mmm mmm

Ennavalae adi ennavalae
Endhan idhayathai tholaithu vitten
Endha idam adhu tholaintha idam
Andha idathaiyum maranthu vitten

Undhan kaal kolusil
Adhu tholainthadhendru
Undhan kaaladi thedi vanthen

Kaadhal endraal perum avasthaiyendru
Unnai kandathum kandu konden
Endhan kazhuthu varai indru kaadhal vanthu
Iru kanvizhi pithungi nindren

Ennavalae adi ennavalae
Endhan idhayathai tholaithu vitten

Vaai mozhiyum enthan thaai mozhiyum
Indru vasapada villaiyadi
Vayitrukum thondaikum uruvamilla
Oru urundayum uruzhuthadi

Kaathirunthaal ethir paarthirunthaal
Oru nimisamum varusamadi
Kangal ellam ennai paarpathupol
Oru kalakamum thondruthadi

Idhu sorgamaa
Naragamaa solladi ullapadi
Naan vaazhvathum vidaikondu
Povathum un vaarthaiyil ullathadi

Ennavalae adi ennavalae
Endhan idhayathai tholaithu vitten

Gokilamae nee kural koduthaal
Unnai kumbitu kan adipen
Gopuramae unnai saaithukondu
Undhan koonthalil meen pidipen

Vennilavae unnai thoonkavaika
Undhan viraluku sodukedupen
Varudavarum poongaatraiyellam
Konjam vadikatti anupivaipen

En kaadhalin thevaiyai
Kaadhukul odhivaipen
Un kaaladi ezhuthiya kolangal
Puthu kavithaigal endruraipen

Ennavalae adi ennavalae
Endhan idhayathai tholaithu vitten`,
  },
  {
    slug: 'mundhinam-parthene',
    title: 'Mundhinam Parthene',
    language: 'Tamil',
    lyrics: `Hi Malini.. I am Krishnan
Naan itha solliyae aaganum
Nee avvalavu azhagu
Inga yevanum ivvalo azhagaa oru..
Ivalo azhaga paarthirukka maattaanga..
And I am in love with you..

Mundhinam paarthenae
Paarthathum thotrenae
Salladai kannaaga
Nenjamum punnaanathae

Ithanai naalaaga
Unnai naan paaraamal
Enguthaan poneno
Naatkalum veenanathae

Vaanathil nee vennilaa
Yekkathil naan theivathaa
{Ippozhuthae ennodu vanthaal enna
Oor paarka ondraga sendraal enna} (2)

Mundhinam paarthenae
Paarthathum thotrenae
Salladai kannaaga
Nenjamum punnaanathae

Ithanai naalaaga
Unnai naan paaraamal
Enguthaan poneno
Naatkalum veenanathae

Kaadhalae…
Swasamae…..

Thulaa thottil unnai vaithu
Nigar seiya ponnai veithaal
Thulaabaaram thorkaatho
Perazhagae…

Mugam paarthu pesum unnai
Mudhal kaadhal sinthum kannai
Annaikkaamal poveno
Aaruyirae….

Oh nizhal pola
Vidaamal unnai thodarvenadi
Pugai pola padaamal pattu
Nagarvenadi
Vinaa nooru kanaavum nooru
Vidai solladi…

Mundhinam paarthenae
Paarthathum thotrenae
Salladai kannaaga
Ullamum punnaanathae

Ithanai naalaaga
(Oh my love..)
Unnai naan paaraamal
(Yes my love..)
Enguthaan poneno
Naatkalum veenanathae

Kadal neelam mangum nerum
Alai vanthu theendum thooram
Manam sendru muzhgaatho
Eerathilae…

Thalai saaika tholum thanthaai
Viral korthu pakkam vanthaai
Idhazh mattum innum yen
Dhoorathilae..

Pagal neram
Kanaakal kanden urangaamalae
Uyir rendum uraaya kanden
Nerungaamalae
Unai indri enakku ethu
Edhirkaalamae

Mundhinam paarthenae
Paarthathum thotrenae
Salladai kannaaga
Nenjamum ponnaanathae

Ithanai naalaaga
Unnai naan paaraamal
Enguthaan poneno
Naatkalum veenanathae

Vaanathil nee vennilaa
Yekkathil naan theivathaa
{Ippozhuthae ennodu vanthaal enna
Oor paarka ondraga sendraal enna} (2)

Vennila.. vennila.. vennila…..`,
  },
  {
    slug: 'aaruyire',
    title: 'Aaruyire',
    language: 'Tamil',
    lyrics: `{Dum dhara dum dhara mastai mastai
Dhara dum dhara dum dhara mastai mastai
Dhara dum dhara dum dum
En aasai thaavathu un melae..} (2)

{Aaruyirae mannipaaya mannipaaya
Sollu nee en sagiyae} (2)

Ohh.. nee ilaathai rathiriyoo
Kaatrillatha iravaai aagaathoo

Aaruyirae mannipaaya mannipaaya
Sollu nee en sagiyae
Aaruyirae mannipaaya mannipaaya
Sollu nee en sagiyae…oh…

{Dum dhara dum dhara mastai mastai
Dhara dum dhara dum dhara mastai mastai
Dhara dum dhara dum dum
En aasai thaavathu un melae..} (2)

Ohoooooo…ooooooo…ohooo….

Aanaal ennai vittu ponaal
Enthan nilaa sornthu pogum
Vaanin neelam theinthu pogumae
Mun koba kuyilae

Pithu pithu kondu
Thavithen thavithen
Unnai enni naan vaadi poven
Nee illamal kavithaiyum isaiyum
Suvaiyae tharathu..
Ainthu pulangalin azhagiyae..

Aaruyirae mannipaaya mannipaaya
Sollu nee en sagiyae…oh…

Dum dhara dum dhara mastai mastai
Dhara dum dhara dum dhara mastai mastai
Dhara dum dhara dum dum
En aasai thaavathu un melae..

Ohhh… ohhh… ohhh….ohh….
Roja poovai..iiiii
Roja poovai mul kaayam
Seithaal nyayamaa..aaa…
Pesi pesi en udal enna theeruma..

Illamalae vaazhvathu inbam
Irunthum illai enbathu thunbam
Ahimsai muraiyil neeyum kolathae..

Dum dhara dum dhara mastai mastai
Dhara dum dhara dum dhara mastai mastai
Dhara dum dhara dum dum
En aasai thaavathu un melae..

Aaruyirae mannipena mannipena
Sollaiya en uyirae
Aaruyirae mannipaaya mannipaaya
Sollu nee en sagiyae…oh…

Ohh.. nee ilaathai rathiriyoo
Kaatrillatha iravaai aagaathoo

Dum dhara dum dhara mastai mastai
Dhara dum dhara dum dhara mastai mastai
Dhara dum dhara dum dum
En aasai thaavathu un melae..

Ahaaaaaaa…aaaaaa……aaaaaaaa….

Dum dhara dum dhara mastai mastai
Dhara dum dhara dum dhara mastai mastai
Dhara dum dhara dum dum
En aasai thaavathu un melae..`,
  },
  {
    slug: 'kanmani-anbodu',
    title: 'Kanmani Anbodu',
    language: 'Tamil',
    lyrics: `Kanmani Anbodu Kaathalan
Naan Ezhuthum Kadithamae..
Ponmani Un Veetil Sowkiyama
Naan Ingu Sowkyamae..
Unnai Enni Paarkaiyil
Kavithai Kottuthu..
Athai Ezhutha Ninaikaiyil
Vaarthai Muttuthu..

Oho..

Kanmani anbodu kadhalan
Naan ezhuthum kadithamae...
Ponmani Un Veetil Sowkiyama
Naan Ingu Sowkyamae..
Unnai Enni Paarkaiyil
Kavithai Kottuthu..
Athai Ezhutha Ninaikaiyil
Vaarthai Muttuthu..

Undaana Kaayamengum Thannaalae Aaripona
Maayam Enna Ponmaane Ponmaane..
Enna Kaayam Aana Pothum
En Maeni Thaangi Kollum
Unthan Maeni Thaangaathu Senthaene..
Enthan Kaathal Ennavendru
Sollaamal Aenga Aenga
Azhugai Vanthathu.
Enthan Sogam Unnai Thaakkum
Enrennumbothu Vantha
Azhugai Nindrathu..

Manithar Unarnthu Kolla,
Ithu Manitha Kaathal Alla..
Athaiyum Thaandi
Punithamaanathu..

Abiraamiyae Thaalaattum
Saamiyae Naanthaane Theriyumaa?
Sivagaamiyae Sivanil Neeyum Paathiyae
Athuvum Unnakku Puriyumaa?
Suba Laaliyae Laaliyae Laali Laaliyae
Abiraami Laaliyae Laali Laaliyae..

Oho..
Kanmani Anbodu Kaathalan
Naan Ezhuthum Kadithamae..
Ponmani Un Veetil Sowkiyama
Naan Ingu Sowkyamae..
Unnai Enni Paarkaiyil
Kavithai Kottuthu..
Athai Ezhutha Ninaikaiyil
Vaarthai Muttuthu..

Lala..la..la..lalla..lalalaa
Lala..la.lalla.lala.laaa...lalalaa..
Lala..la..la..lalla..lalalaa`,
  },
  {
    slug: 'innum-konjam-neram',
    title: 'Innum Konjam Neram',
    language: 'Tamil',
    lyrics: `{Innum konjam neram iruntha thaan enna
Yen avasaram enna avasaram nillu ponnae} (3)

Innum pesa kooda thodangala
En nenjamum konjamum nerayala
Ipo enna vittu pogathae enna vittu pogathae
Innum pesa kooda thodangala
En nenjamum konjamum nerayala
Ipo mazha pola nee vantha kadal pola naan niraiven

Innum konjam neram iruntha thaan enna
Yen avasaram enna avasaram nillu ponnae

Ithuvaraikkum thaniyaaga en manasa
Alaiyavitta alaiyavitta alaiyavittayae
Ethirpaara nerathula idhayathula
Valaya vittu valaya vittu valayavittaya

Nee vanthu vanthu poyen antha alaigala pola
Vantha un kaiyula maatikuven valaiyala pola
Un kannuketha azhaga varen kaathiruda konjam
Unna eppadiyae thanthaalum thithikumae nenjam

Innum konjam kaalam porutha thaan enna
Yen avasaram enna avasaram sollu kannae
Innum konjam kaalam porutha thaan enna
Yen avasaram enna avasaram sollu kannae

Kadal maatha aanaiyaaga uyirodu
Unakaaga kaathirupen kaathirupenya
En kannu rendum mayanguthae mayanguthae
Unnidam sollavae thayanguthae
Intha uppu kaathu inikuthu
Unnayum ennayum ezhukuthu
Unna ezhukka enna ezhukka
En manasu nerayumae
Intha meen udambu vaasana
Enna nee thottathum manakuthae
Intha iravellam nee pesi thalaiyaati naan rasippen

{Innum konjam neram iruntha thaan enna
Yen avasaram enna avasaram nillu ponnae} (2)

Nee en kannu pola irukanum
En pullaiku thagappan aavanum
Antha alaiyoram namma pasanga konji vilaiyaadanum
Nee sonthamaaga kidaikanum
Nee sonnathellam nadakanum
Namma ulagam oonu indru naam uruvaakanum..
Ohhh ohhh ohhh…`,
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
  {
    slug: 'moh-moh-ke-dhaage',
    title: 'Moh Moh Ke Dhaage',
    language: 'Hindi',
    lyrics: `Yeh Moh Moh Ke Dhaage
Teri Ungliyon Se Jaa Uljhe

Yeh Moh Moh Ke Dhaage
Teri Ungliyon Se Jaa Uljhe

Koi Toh Toh Na Laage
Kis Tarah Giraha Yeh Suljhe

Hai Room Room Ek Tara
Hai Room Room Ek Tara
Jo Badalon Mein Se Guzre

Yeh Moh Moh Ke Dhaage
Teri Ungliyon Se Jaa Uljhe

Koi Toh Toh Na Laage
Kis Tarah Giraha Yeh Suljhe

Tu Hoga Zaraa Paagal
Tune Mujhko Hai Chuna

Tu Hoga Zaraa Paagal
Tune Mujhko Hai Chuna

Kaise Tune Ankahaa
Tune Ankahaa Sab Suna

Tu Hoga Zaraa Paagal
Tune Mujhko Hai Chuna

Tu Din Sa Hai
Mein Raat Aana Donon
Mil Jaayein Shamon Ki Tarah Aa Aaa

Yeh Moh Moh Ke Dhaage
Teri Ungliyon Se Ja Uljhe
Koi Toh Toh Naa Laage
Kis Tarah Girha Yeh Suljhe

Ki Aisa Beparwaah
Maan Pehle To Naa Tha

Ki Aisa Beparwaah
Maan Pehle To Na Tha
Cheethiyon Ko Jaise Mila Gaya
Jaise Ek Naya Sa Pata

Ki Aisa Beparwaah
Maan Pehle To Naa Tha

Khali Raahein
Hum Aankh Mundein Jaye
Pahunche Kahin To Bewajah

Yeh Moh Moh Ke Dhaage
Teri Ungliyon Se Ja Uljhe
Koi Toh Toh Na Laage
Kis Tarah Giraha Yeh Suljhe`,
  },
  {
    slug: 'samjhawan',
    title: 'Samjhawan',
    language: 'Hindi',
    lyrics: `Main tenu samjhawan ki
Na tere bina lagda ji

Main tenu samjhawan ki
Na tere bina lagda ji

Tu ki jaane pyaar mera
Main karun intezar tera
Tu dil tui-yon jaan meri

Main tenu samjhava ki
Na tere bina lagda ji
Tu ki jaane pyaar mera
Main karun intezar tera
Tu dil tui-yon jaan meri
Main tenu samjhaawa ki
Na tere bina lagda ji

Mere dil ne, chun laiyaa ne
Tere dil diyaan raahan
Tu jo mere, naal tu rehta
Turpe meriyaan saaha

Jeena mera~ hoye
Hun hai teraa, ki main karaan
Tu kar aitbaar mera
Main karoon intezar tera
Tu dil tui-yon jaan meri

Main tenu samjhaawan ki
Na tere bina lagdaa ji

Ve changa nahion keeta beba
Ve changa nahion keeta beba
Dil mera tod ke

Ve bada pachhtaiyaan akhaan
Ve bada pachhtaiyaan akhaan
Naal tere jod ke~

Tenu chad ke, kitthe jawan
Tu mera parchhanvaa
Tere mukhde, vich hi main taan
Rab nu apne pawaan

(Meri dua~ haaye
Sajda teraa kardi sadaa
Tu sun iqraar) mera
Main karun intezar tera
Tu dil tui-yon jaan meri

Main tainu samjhawaan ki
Na tere bina lagda jii..`,
  },
  {
    slug: 'chahun-main-ya-naa',
    title: 'Chahun Main Ya Naa',
    language: 'Hindi',
    lyrics: `Tu hi ye mujhko bata de
Chahun main ya naa
Apne tu dil ka pata de
Chahun main ya naa

Tu hi ye mujhko bata de
Chahun main ya naa
Apne tu dil ka pata de
Chahun main ya naa

Itna bata doon tujhko
Chaahat pe apni mujhko
Yun tto nahi ikhtiyaar
Phir bhi yeh socha dil ne
Ab jo laga hoon milne
Poochhu tujhe ek baar

Tu hi ye mujhko bata de
Chahun main ya naa
Apne tu dil ka pata de
Chahun main ya naa

Aisi kabhi pehle hui naa thi khwaahishein
O.. kisi se bhi milne ki
Naa ki thi koshishein
Uljhan meri suljha de
Chaahun main ya naa
Aankhon aankhon mein jataa de
Chaahun main ya naa

Mere chhote chhote khwaab hain
Khwabon mein geet hain
Geeton mein zindagi hai
Chaahat hai, preet hai
Abhi main na dekhoon khwaab woo
Jin mein na tu mile
Le khole honth maine
Ab tak the jo sile

Mujhko na jitna mujh pe
Utna iss dil ko tujh pe
Hone laga aitbaar
Tanha lamhon mein apne
Bunti hoon tere sapne
Tujhse hua mujhko pyaar o o...
Poochungi tujhko kabhi naa
Chaahun main ya naa
Tere khaabon mein ab jeena
Chaahun main kyun naa!

Tu hi yeh mujhko bata de
Chahun main ya naa
Apne tu dil ka pata de
Chahun main ya naa`,
  },
  {
    slug: 'sun-raha-hai',
    title: 'Sun Raha Hai',
    language: 'Hindi',
    lyrics: `Apne karam ki kar adaayeiiiin

Yaaraaaa
Yaaraaaa
Yaaraaaaaa

Mujhko iraade de
Kasamein de waade de
Meri duaaon ke ishaaron ko sahaare de
Dil ko thikaane de
Naye bahaane de
Khaabon ki baarishon ko
Mausam ke paimane deee
Apne karam ki kar adaayeiiin
Kar de idhar bhi tu nigaaheiiiin

Sun raha hai naa tuuu
Ro raha hoon maiiin
Sun raha hai naa tuuuu
Kyun ro raha hun maiiiin
Sun raha hai naa tuuuu
Ro raha hoon maiiiiiin
Sun raha hai naa tuuuu
Kyun ro raha hun maiiiin

Manzileiiiin ruswa hain !
Khoya hai raaaaastaaa
Aaye le jaayeeee !
Itni si iiiiltejaa
Ye ! meri zamanat haiiiii
Tu meri amaanat haiiii
Haaaaan

Apne karam ki kar adayeiiin
Kar de idhar bhi tu nigaaheiiin
Sun raha hai naa tuuu
Ro ! raha hoon maiiiiin
Sun raha hai naa tuuu
Kyun ro raha hun maiiin

Waqt bhiii thehara haii !
Kaise kyun yeeee huaaaa
Kaash ! tuuu aise aayeee !
Jaiiiseee koiii duaaaaaa
Tu rooh ki raahat haiiii !
Tu meri ibaadat haiiiii

Apne karam ki kar adaayeiiin
Kar de idhar bhi tu nigaaheiiiin !

Sun raha hai naa tuuu
Ro raha hoon ! maiiiiin
Sun raha hai naa tuuuu
Kyun ro raha hun maiiiin..
Sun raha hai naa tuuuu
Ro ! raha hoon maiiiin
Sun raha hai naa tuuu
Kyun ro raha hun maiiin..

Yaaraaaaaa`,
  },
  {
    slug: 'mitwa',
    title: 'Mitwa',
    language: 'Hindi',
    lyrics: `Love will find the way!
Jaaniye heeriye

Love will find the way!
Jaaniye heeriye

Mere mann ye bata de tu
Kis ore chala hai tu
Kya paaya nahi tune
Kya dhoond raha hai tu
Jo hai ankahee, jo hai ansuni
Wo baat kya hai bata

Mitwa kahe dhadkane tujhse kya
Mitwa ye khud se toh na tu chupa

Love will find the way!
Jaaniye heeriye

Mere mann ye bata de tu
Kis ore chala hai tu
Kya paaya nahi tune
Kya dhoond raha hai tu
Jo hai ankahee, jo hai ansuni
Wo baat kya hai bata

Mitwa kahe dhadkane tujhse kya
Mitwa ye khud se toh na tu chupa

Jeevan Dagar mein, Prem Nagar mein

Jeevan Dagar mein, Prem Nagar mein
Aaya nazar mein, jab se koi hai
Tu sochta hai, tu poochta hai
Jiski kami thi, kya ye wohi hai
Haan ye wohi hai, haan ye wohi hai

Tu ek pyasa aur ye nadi hai
Kaahe nahi isko tu khulke bataye
Jo hai ankahee, jo hai ansuni
Wo baat kya hai bata

Mitwa kahe dhadkane tujhse kya
Mitwa ye khud se toh na tu chupa

Ho..
Teri nigaahein, paa gayi raahein
Tu ye soche, jaaun na jaaun
Ye zindagi jo, hai naachti toh
Kyun bediyon mein, hai tere paaon
Preet ki dhun par, naach le pagal

Udta agar hai udne do aanchal
Kaahe koi apne ko aise tarsaaye
Jo hai ankahee, jo hai ansuni
Wo baat kya hai bata

Mitwa kahe dhadkane tujhse kya
Mitwa ye khud se toh na tu chupa

Mere mann ye bata de tu
Kis ore chala hai tu
Kya paaya nahi tune
Kya dhoond raha hai tu

Love will find the way!
Jaaniye heeriye,
Love will find the way!
Jaaniye heeriye,

Mitwa.. Mitwa..`,
  },
  {
    slug: 'mast-magan',
    title: 'Mast Magan',
    language: 'Hindi',
    lyrics: `Ishq ki dhooni
Roz jalaaye
Uth tha dhuan tho
Dhuan tho
Kaise chhupaaye
Kaise chhupaaye

Ho akhiyan kare jee hazuri
Maange hai teri manzuri
Kajra siyaahi
Din rang jaaye
Teri kastoori
Rain jagaye

Man mast magan
Man mast magan
Bas tera naam dohraaye
Man mast magan
Man mast magan
Bas tera naam dohraaye

Ho chaahe bhi tho
Bhool na paaye

Man mast magan
Man mast magan
Bas tera naam dohraaye
Man mast magan
Man mast magan
Tera naam dohraaye

Hooo~~
Jogiya jog lagake
Makhra rog laga ke
Ishq ki dhooni
Roz jalaaye
Uth tha dhuaan tho
Kaise chhupaaye

Man mast magan
Man mast magan
Bas tera naam dohraaye
Man mast magan
Man mast magan
Bas tera naam dohraaye

Chaahe bhi tho
Bhool na paaye

Man mast magan
Man mast magan
Bas tera naam dohraaye
Man mast magan
Man mast magan
Tera naam
Bas tera naam dohraaye
Dohraaye

Hoooo~~
Odh ke dhaani
Reet ki chaadar
Aaya tere shehar mein
Ranjha tera

Duniya zamaana
Jhoota fasaana
Jeene marne ka waada
Saancha mera

Ho
Sheeshmahal na
Mujhko suhaaye
Tujh sang sookhi
Roti bhaaye

Man mast magan
Man mast magan
Bas tera naam dohraaye
Man mast magan
Man mast magan
Bas tera naam dohraaye
Ho chaahe bhi tho
Bhool na paaye
Man mast magan
Man mast magan
Bas tera naam dohraaye
Man mast magan
Man mast magan
Tera naam~
Dohraaye~`,
  },
  {
    slug: 'woh-lamhe',
    title: 'Woh Lamhe',
    language: 'Hindi',
    lyrics: `Wo Lamhe, wo baatein koi na jaane
Thi kaisi raatein, ho, barsaatein
Wo bheegi-bheegi yaadein, wo bheegi-bheegi yaadein

Na main jaanu, na tu jaane
Kaisa hai ye mausam, koi na jaane
Kahi se hai fizaa aayi
Ghamon ki dhoop sang laayi
Khafaa ho gaye hum, judaa ho gaye hum

Wo Lamhe, wo baatein koi na jaane
Thi kaisi raatein, ho, barsaatein
Wo bheegi-bheegi yaadein, wo bheegi-bheegi yaadein

Saagar ki gehraayi se gehra hai apna pyaar
Sehraoun ki in hawaon me kaise aayegi bahaar?
Kahan se ye hawa aayi??
Ghataayen kaali kyoun chhaayi
Khafaa ho gaye hum, judaa ho gaye hum

Wo Lamhe, wo baatein koi na jaane
Thi kaisi raatein, ho, barsaatein
Wo bheegi-bheegi yaadein, wo bheegi-bheegi yaadein`,
  },
  {
    slug: 'dil-diyan-gallan',
    title: 'Dil Diyan Gallan',
    language: 'Hindi',
    lyrics: `Kachchi doriyon doriyon doriyon se
Mainu tu baandh le
Pakki yaariyon yaariyon yaariyon mein
Aunde na faasle

Eh narazgi kaagzi saari teri
Mere sohneya sun lai meri

Dil diyan gallan
Karange naal naal beh ke
Akh naal akh nu mila ke
Dil diyan gallan haye
Karange roz roz beh ke
Sachiyan mohabbtan nibha ke

Sataye mainu kyun
Dikhaye mainu kyun
Aivein jhoothi moothi
Russ ke russa ke

Dil diyan gallan
Karange naal naal beh ke
Akh naal akh nu mila ke

Tainu rakhan ton chhupa ke
Rakhan Ankh te saja ke Tu ae meri wafa
Rakh apna bana ke
Main teri laiyan, teri laiyan yaara
Na baawein kade dooriyan

Tainu rakhan ton chhupa ke
Rakhan Ankh te saja ke Tu ae meri wafa
Rakh apna bana ke
Main teri laiyan, teri laiyan yaara
Na baawein kade dooriyan

Main jeena haan tera
Main jeena haan tera
Tu jeena hai mera
Dass laina kee nakhra dikha ke

Dil diyan gallan
Karange naal naal beh ke
Akh naal akh nu mila ke
Dil diyan gallan

Rata Kaliyan Kaliyan Kaliyan ve
Mere dil saware
Mere haniya haniya haniya je
Lag tu na gale
Mera asma mousma di na sune
Koi khwab na pura bane

Dil diyan gallan
Karange naal naal beh ke
Akh naal akh nu mila ke
Pata hai mainu kyu
Choopake dekhe tu
Mere naam se naam milake
Dil diyan gallan
Karange naal naal beh ke
Akh naal akh nu mila ke

Dil diyan gallan`,
  },
  {
    slug: 'dagabaaz-re',
    title: 'Dagabaaz Re',
    language: 'Hindi',
    lyrics: `Dagabaaz re haaye dagabaaz re
Tore naina bade dagabaaz re
Oo tere naina haaye
Naina naina naina haaye

Dagabaaz re haye dagabaaz re
Tore naina bade dagabaaz re
Kal mile haan kal mile haye kal mile
Ye hamko bhul gaye aaj re haaye
Dagabaaz re haaye dagabaaz re
Tore naina bade dagabaaz re
Dagabaaz dagabaaz dagabaaz re
Tore naina bade dagabaaz re

Kahe kaffa aise chullbul se bullbul
Kahe na tu mane batiya haye

Kahe kaffa aise chullbul se bullbul
Kahe na tu mane batiya haye
Kahe pada piche jaan pe bairi
Mein jaanu kya tori khatia haye
Zindagi apani hum touka daan dei de
Muskurake jo maange praan dei de
Kal mile ho kal mile haye
Kal mile bhi hamko bhul gaye aaj re
Haye dagabaaz re haye dagabaaz re
Tore naina bade dagabaaz re

Oo tere naina daga daga
Daga daga dagabaaz re
Dagabaaz re naina re

Darta jahan hum se hum toh usse darte
Yeh sab jaane mori raniyan haye
Darta jahan hum se hum toh usse darte
Yeh sab jaane mori raniyan haye
Maska lagauna chodo ji chodo
Samajhti hai tori dhaniyan haye
Iss ada pe toh hum kuruban gaye ji
Tohri nana main hami hai jaan gaye ji
Kal mile ho kal mile haye kal mile
Re hamko bhul gaye aaj re haye
Dagabaaz re haye dagabaaz re
Tore/Mere naina bade dagabaaz re
Dagabaaz dagabaaz dagabaaz re haye
Tore/Mere naina bade dagabaaz re`,
  },
  {
    slug: 'tera-hone-laga-hoon',
    title: 'Tera Hone Laga Hoon',
    language: 'Hindi',
    lyrics: `Shining in the setting sun
Like a pearl upon the ocean
Come on feel me
Oh feel me
Shining in the setting sun
Like a pearl upon the ocean

Come on heal me
Girl heal me
Thinking about the love we're making
And the life we're sharing
Come and feel me
Oh feel me
Shining in the setting sun
Like a pearl upon the ocean
Come on feel me
Come on heal me

Hua jo tu bhi mera mera
Tera jo ikraar hua
To kyun na main bhi keh doon keh doon
Hua mujhe bhi pyaar hua

Teraaa hone laga hoon
Khone laga hoon
Jab se mila hoon
Teraaa hone laga hoon
Khone laga hoon
Jab se mila hoon

Shining in the setting sun
Like a pearl upon the ocean
Come on feel me
Oh feel me
Shining in the setting sun
Like a pearl upon the ocean
Come on heal me
Oh heal me

Waise to mann mera pehli bhi raato
Mein Aksar hi chahat ke haan
Sapne saujaunta tha
Pehle bhi dhadkan ye dhun koi gaati thi
Par ab jo hota hai woh pehle na hota tha

Hua hai tujhe jo bhi jo bhi
Mujhe bhi is baar hua
To kyun na main bhi keh doon keh doon
Hua mujhe bhi pyaar hua

Tera hone laga hoon
Khone laga hoon
Jab se mila hoon
Tera hone laga hoon
Khone laga hoon
Jab se mila hoon

Aankhon se chhu loon ke
Bahen tarasti hain
Dil ne pukara hai haan
Ab to chale aao
Aaoge shabnam ki boondein barasti hain
Mausam ishara hai haan
Ab to chale aao

Baahon mein dalein baahein baahein
Baahon ka jaise haar hua
Haan mana maine mana mana
Hua mujhe bhi pyaar hua

Tera hone laga hoon
Khone laga hoon
Jab se mila hoon

Tera hone laga hoon
Khone laga hoon
Jab se mila hoon

Shining in the setting sun
Like a pearl upon the ocean
Come on feel me
Oh feel me
Shining in the setting sun
Like a pearl upon the ocean
Come on heal me
Girl heal me
Thinking about the love we're making
And the life we're sharing
Come and feel me
Oh feel me
Shining in the setting sun
Like a pearl upon the ocean
Come on feel me
Come on heal me`,
  },
  {
    slug: 'pee-loon',
    title: 'Pee Loon',
    language: 'Hindi',
    lyrics: `Pee loon tere neele
Neele nainon se shabnam
Pee loon tere geele
Geele hotho ki sargam
Pee loon hai peene ka mausam

Hosh mein rahoon kyun aaj main
Tu meri baahon mein simti hai
Mujh mein samayi hai yun
Jis tarah tu koi ho nadi,
Tu mere seene mein chupti hai
Sagar tumhara main hoon

Pee loon teri dheemi
Dheemi lehron ki cham cham
Pee loon teri saundi
Saundi saanson ko har dum
Pee loon hai peene ka mausam

Shaam ko miloon jo main tujhe
Toh bura subah na jaane kyu
Kuch maan jaati hai yeh
Har lamha, har ghadi har pehar
Hi teri yaadon se tadpa
Ke mujhko jalati hai yeh

Pee loon main dheere
Dheere jalne ka yeh gum
Pee loon in gore gore
Haanthon se hum dum
Pee loon hai peene ka mausam`,
  },
  {
    slug: 'channa-mereya',
    title: 'Channa Mereya',
    language: 'Hindi',
    lyrics: `Acha chalta hoon
Duaon mein yaad rakhna
Mere zikr ka zubaan pe swaad rakhna

Acha chalta hoon
Duaon mein yaad rakhna
Mere zikr ka zubaan pe swaad rakhna

Dil ke sandookon mein
Mere ache kaam rakhna
Chitthi taaron mein bhi
Mera tu salaam rakhna

Andhera tera maine le liya
Mera ujla sitaara tere naam kiya

Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..

Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..

O piyaa.. piya.. piya..
O Piyaa.. Oohh..

Mm.. mehfil me teri hum naa reh jo
Gham toh nahi hai, gham toh nahi hai
Qisse humare nazdeekiyon ke
Kam to nahi hai, kam to nahi hai
Kitni dafaa subah ko meri
Tere aangan mein baithe shaam kiya

Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..

Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piyaaaaaaaaa..

O Piyaa.. piyaa..

Channa mereya mereya
Channa mereya mereya
Channa mereya mereya o piya

Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..

Tere rukh se apna raasta mod ke chala
Chandan hoon main
Apni khushboo chodke chala
Mann ki maya rakhke tere takiye tale

(Channa mereya mereya
Channa mereya mereya
Channa mereya mereya)

O Piya..`,
  },
  {
    slug: 'tera-mera-rishta',
    title: 'Tera Mera Rishta',
    language: 'Hindi',
    lyrics: `Tera yakeen kyun, maine kiya nahi
Tujhse raha kyun judaa
Mujhpe yeh zindagi, karti rahi sitam
Tune hi di hai panaah

Tera mera rishta purana
Tera mera rishta purana
Tera mera rishta purana

Hai kya tadap
Hai yeh kaisi saza
Tu kyun mujhe
Aaj yaad aa gaya
Bechain din mere
Bechain raat hai
Kya mein karoon, kuch bataa
Hai mere paon hi,
Khud meri bediyaan
Mujhse mujhe tu chudaa

Tera mera rishta purana
Tera mera rishta purana
Tera mera rishta purana

Jo mujh mein hai,
Shaks woh keh raha
Aaa ab main doon,
Karz tera chukaa
Aankhen hai num meri,
Saasein chubhan meri
Zakhm hua, phir hara
Dil ke viraane mein,
Mere phasaane mein
Tuhi to har dum raha

Tera mera rishta purana
Tera mera rishta purana
Tera mera rishta purana
Oh tera mera…a… purana`,
  },
  {
    slug: 'khwaja-mere-khwaja',
    title: 'Khwaja Mere Khwaja',
    language: 'Hindi',
    lyrics: `Khwaja ji iiii…. khwaja
Khwaja jiiiii, khwaja
Jiiiiii, khwaja jiii

Ya garib nawaz
Ya garib nawaz
Ya garib nawaz
Ya moinuddin
Ya moinuddin
Ya khwaja ji
Ya khwaja ji
Ya khwaja ji (4)

Khwaja mere khwaja
Dil mein sama ja
Shaho ka shah tu
Ali ka dulara

Khwaja mere khwaja
Dil mein sama ja
Shaho ka shah tu
Ali ka dulara

{Khwaja mere khwaja
Dil mein sama ja} (2)

{Beqaso ki taqdeer
Tune hai sawari} (2)

Khwaja mere khwaja

Aaa…
Tere darbar mein khwaja
Door toh hai dekha

Aaaa…
Tere darbar mein khwaja
Sar jhuka te hai auliya
Tu hai unalwali khwaja
Rutba hai pyara
Chahne se tujhko khwaja
Ji mustafa ko paya

Khwaja mere khwaja
Dil mein sama ja
Shaho ka shah tu
Ali ka dulara

Mere peer ka sadka
Mere peer ka sadka aaaaa…..
Hai mere peer ka sadka
Tera daman hai thama

Khawajajiii

Tali har bala humari
Chaya hai khumar tera
Jitna bhi rashk kare beshak
Toh kam hai ae mere khwaja
Tere kadmo ko mere rehnuma
Nahi chodna gawara

Khwaja mere khwaja
Dil mein sama ja
Shaho ka shah tu
Ali ka dulara

Khwaja mere khwaja
Dil mein sama ja
Shaho ka shah tu
Ali ka dulara

{Khwaja mere khwaja
Dil mein sama ja} (2)

{Beqaso ki taqdeer
Tune hai sawari} (2)

Khwaja ji khwaja ji….`,
  },
  {
    slug: 'kun-faya-kun',
    title: 'Kun Faya Kun',
    language: 'Hindi',
    lyrics: `Ya Nizamuddin Auliya
Ya Nizamuddin Sarkar

Kadam badha le
Haddon ko mita le
Aaja khalipan mein pee ka ghar tera
Tere bin khali aaja khalipan mein
Tere bin khali aaja khalipan mein

Oooooo..Oooooo..
Ooooooo...oooooooo...
Rangreza, Rangreza, Rangreza aa...
Rangrezaaa...

Kun faya kun Kun fayakun fayakun
Fayakun fayakun fayakun
Kun fayakun Kun fayakun fayakun
Fayakun fayakun fayakun

Jab kahin pe kuch nahi bhi nahi tha
Wahi tha Wahi tha Wahi tha Wahi tha
Jab kahin pe kuch nahi bhi nahi tha
Wahi tha Wahi tha Wahi tha Wahi tha
Wo jo mujhme samaya wo jo tujhme samaya
Maula wahi wahi maaya
Wo jo mujhme samaya wo jo tujhme samaya
Maula wahi wahi maaya
Kun fayakun Kun fayakun

Sadq Allahu Ali-ul-Azeem

Rangreza rang mera tann mera mann
Le le rangaai chahe tann chahe mann
Rangreza rang mera tann mera mann
Le le rangaai chahe tann chahe mann

Sajra savera mere tann barse
Kajra andhera teri jalti lau

Sajra savera mere tann barse
Kajra andhera teri jalti lau
Qatra mila jo tere darr par se
O Maulaa... Maulaa... aa...

Kun fayakun Kun fayakun
Kun Fayakun Kun fayakun
Kun fayakun kun fayakun fayakun
Fayakun fayakun fayakun
Aaa Kun fayakun Kun fayakun fayakun
Fayakun fayakun fayakun

Jab kahin pe kuch nahi bhi nahi tha
Wahi tha Wahi tha Wahi tha Wahi tha
Jab kahin pe kuch nahi bhi nahi tha
Wahi tha Wahi tha Wahi tha Wahi tha
Kun fayakun Kun fayakun

Sadq Allahu Ali-ul-Azeem
Sadaqa-Rosooluh-ul-Nabi-ul-Kareem
SalAllah hu alayhi wasallam
SalAllah hu alayhi wasallam

Hooo... mujh pe karam sarkar tera
Araz tujhe kar de mujhe, mujhse hi riha
Ab mujhko bhi ho deedar mera
Kar de mujhe, mujh se hi riha
Mujh seee... hi rihaaa...

Mann ke mere ye bharam
Kachche mere ye karam
Leke chale hain kahaan
Main to jaanu hi na

Tu hai mujh mein samaaya
Kahaan leke mujhe aaya
Main hoon tujh mein samaaya
Tere peechhe chala aaya
Tera hi main ik saaya
Tune mujhko banaya
Main toh jag ko naa bhaya
Tune gale se lagaya
Haq tu hi hai khudaya
Sach tu hi hai khudaya Aaa...

Kun fayakun Kun fayakun fayakun
Fayakun fayakun fayakun
Kun fayakun Kun fayakun fayakun
Fayakun fayakun fayakun
Jab kahin pe kuch nahi bhi nahi tha
Wahi tha Wahi tha Wahi tha Wahi tha
Jab kahin pe kuch nahi bhi nahi tha
Wahi tha Wahi tha Wahi tha Wahi tha
Kun fayakun Kun fayakun

Sadq Allahu Ali-ul-Azeem
Sadaqa-Rosooluh-ul-Nabi-ul-Kareem
SalAllah hu alayhi wasallam`,
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
