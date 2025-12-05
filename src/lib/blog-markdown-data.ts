/**
 * MARKDOWN-BASED BLOG DATA
 * 
 * This file shows how to structure blog posts using markdown.
 * The markdown content will be automatically parsed and rendered with proper styling.
 * 
 * See /lib/markdown-parser.tsx for the complete markdown syntax guide.
 */

export interface BlogPostMarkdown {
  id: string;
  metaDescription: string;
  content: string; // Full markdown content
  tags: string[];
  relatedPosts?: string[];
  author?: {
    bio: string;
  };
}

export const blogMarkdownContent: { [key: string]: BlogPostMarkdown } = {
  'leitarordarannsokn-2024': {
    id: 'leitarordarannsokn-2024',
    metaDescription:
      'Nákvæm leiðsögn um hvernig á að gera leitarorðarannsóknir fyrir íslenskan markað árið 2024. Verkfæri, aðferðir og hagnýt dæmi.',
    tags: ['leitarorðarannsóknir', 'SEO', 'Google', 'rannsóknir', 'innihald'],
    relatedPosts: ['local-seo-island', 'seo-fyrir-smafyrirtaeki'],
    content: `
## Inngangur

Leitarorðarannsóknir eru grunnurinn að allri árangursríkri SEO vinnu. Án þess að vita hvaða orð og setningar fólk er að leita að, er næstum ómögulegt að ná árangri í leitarvélum. En hvernig velur maður réttu leitarorðin fyrir íslenskt fyrirtæki?

Íslenski markaðurinn er sérstakur. Við erum fá, við notum sérstakar íslensku orðasamsetningar, og samkeppnin er önnur en á stærri mörkuðum. Í þessari grein förum við í gegnum allt ferlið frá A til Ö.

💡 **Pro tip:** Byrjaðu alltaf á að hugsa eins og viðskiptavinurinn þinn. Hvað myndi hann leita að þegar hann er með vandamálið sem þú leysir?

## Af hverju skipta leitarorð máli?

Google og aðrar leitarvélar nota leitarorð til að skilja hvað vefsíður fjalla um. Ef þú vilt að vefsíðan þín birtist þegar fólk leitar að þinni þjónustu, þarftu að hafa þessi orð á réttum stöðum.

En það er ekki bara um að birta hvaða orð sem er. Þú þarft að hugsa um:

- **Search volume** - Hversu margir leita að þessu orði?
- **Competition** - Hversu erfitt er að ná í toppsæti?
- **Intent** - Hvað vill fólk sem leitar að þessu?
- **Relevance** - Er þetta í raun það sem þú býður upp á?

### Dæmi um mismunandi formöt

Hér eru dæmi um _italic texta_ og **bold texta** og ~~rangt strikethrough~~ texta. Þú getur líka notað __bold með tvöföldum undirstrikum__ og _einföldum undirstriki fyrir italic_.

Þetta er mikilvægt: **ekki gera þetta** en þú mátt gera *þetta* ef þú vilt.

## Rannsóknarferlið

Góðar leitarorðarannsóknir taka tíma. Þetta er ekki eitthvað sem þú gerir á 15 mínútum. Hér er ferlið sem við notum hjá 55.is:

### 1. Brainstorm og hugmyndavinna

Byrjaðu á að skrifa niður öll þau orð og setningar sem þér dettur í hug sem tengjast þinni þjónustu. Ekki censora þig - skrifaðu bara allt niður. Talaðu við söluteymið þitt, þjónustufulltrúa, og jafnvel viðskiptavini. Hvaða orð nota þeir?

### 2. Verkfæri sem við notum

Til að gera alvöru rannsóknir þarftu rétt verkfæri. Hér eru okkar favoritar:

- **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)** - Ókeypis og beint frá Google
- **[Ahrefs](https://ahrefs.com)** - Besta verkfærið fyrir competitive analysis
- **[SEMrush](https://www.semrush.com)** - Frábært fyrir market research
- **Google Search Console** - Sýnir þér hvað er þegar að virka
- **[Answer The Public](https://answerthepublic.com)** - Finnur spurningar sem fólk spyr

💡 **Pro tip:** Ef þú vilt læra meira um SEO grunnatriði, skoðaðu [Moz Beginner's Guide](https://moz.com/beginners-guide-to-seo) eða [innlend leiðbeiningar](https://55.is/radgjof/seo).

ℹ️ **Athugið:** Þessi verkfæri sýna oft data fyrir alþjóðlegan markað. Íslenska datað er takmarkað, svo þú þarft að nota dómgreind.

### 3. Greining og val

Núna þegar þú ert með lista af mögulegum leitarorðum, þarftu að greina þau. Við notum þessa formúlu:

\`\`\`
Keyword Score = (Search Volume × Relevance × Intent) / Competition

Dæmi:
- "vefsíðugerð" → (1000 × 10 × 9) / 8 = 11,250
- "WordPress vefsíður" → (200 × 8 × 7) / 4 = 2,800
\`\`\`

Leitarorðin með hæstu einkunnina eru þau sem þú ættir að forgangsraða. En ekki gleyma að hafa blönduna af "quick wins" (lágt competition) og "long-term goals" (hátt search volume).

## Íslenski markaðurinn

Íslenska tungan er flókin. Við höfum fjögur föll, beygingarform, og samsettar orð sem geta verið skrifaðar á fjölmargar mismunandi leiðir. Þetta þýðir að þú þarft að hugsa um:

- **Beygingar** - "vefsíða", "vefsíðu", "vefsíðunnar"
- **Samsetningar** - "vefsíðugerð" vs "vefur síðu gerð"
- **Íslenska vs enska** - Sumir leita á ensku, aðrir á íslensku
- **Staðbundið** - "vefsíðugerð Reykjavík" vs bara "vefsíðugerð"

Íslenski markaðurinn er svo lítill að það sem virkar fyrir amerísk fyrirtæki virkar ekki endilega hér. Við þurfum að vera snjallari.

## Hvernig á að innleiða leitarorð

Núna þegar þú veist hvaða leitarorð þú vilt nota, þarftu að setja þau á réttu staðina á vefsíðunni þinni:

- **Title tag** - Mikilvægasta staðurinn
- **H1 heading** - Aðalfyrirsögn síðunnar
- **Meta description** - Sýnilegur í leitarniðurstöðum
- **URL slug** - Stuttur og lýsandi
- **Alt text** - Fyrir myndir
- **Body content** - Náttúrulega í textanum
- **Internal links** - Tenglar á milli síðna

⚠️ **Viðvörun:** Ekki "keyword stuff" - þ.e. troðfylla síðuna af leitarorðum. Google er orðið svo snjall að það reiknast gegn þér.

## Algeng mistök sem þarf að forðast

Við sjáum þessi mistök aftur og aftur:

- **Að einblína bara á high-volume keywords** - Samkeppnin er oft of mikil
- **Að gleyma long-tail keywords** - "besta vefsíðugerð fyrir íslenska veitingastaði" getur verið betri en bara "vefsíðugerð"
- **Að hunsa search intent** - Fólk sem leitar að "hvað kostar vefsíða" er á öðru stigi en það sem leitar að "WordPress tutorial"
- **Að gera þetta einu sinni og gleyma því** - Leitarorðarannsóknir eru stöðugt ferli
- **Að treysta of mikið á verkfærin** - Þau vita ekki allt um íslenskan markað

## Niðurstaða

Leitarorðarannsóknir eru blanda af vísindum og list. Þú þarft data til að taka upplýstar ákvarðanir, en þú þarft líka að skilja markaðinn þinn, viðskiptavinina, og hvernig fólk hugsar.

Byrjaðu smátt, prófaðu þig áfram, og ekki vera hræddur við að breyta stefnunni ef eitthvað virkar ekki. Og mundu: SEO er marathon, ekki sprint.

✅ **Næstu skref:** Taktu 30 mínútur í dag til að skrifa niður 20 leitarorð sem tengjast þinni þjónustu. Síðan notarðu Google Keyword Planner til að athuga search volume.
`,
  },

  'local-seo-island': {
    id: 'local-seo-island',
    metaDescription:
      'Heildarhandbók um local SEO fyrir íslensk fyrirtæki. Lærðu að toppa Google Maps og staðbundnar leitarniðurstöður.',
    tags: ['Local SEO', 'Google Maps', 'Google Business Profile', 'staðbundin leit'],
    relatedPosts: ['leitarordarannsokn-2024', 'seo-fyrir-smafyrirtaeki'],
    content: `
## Hvað er Local SEO?

Local SEO snýst um að fá fyrirtækið þitt til að birtast í staðbundnum leitarniðurstöðum. Þegar einhver leitar að "bifvélaverkstæði í Reykjavík" eða "besta pítsustað nálægt mér", þá vill Google sýna þeim fyrirtæki sem eru í grenndinni.

Fyrir íslensk fyrirtæki með líkamlega staðsetningu - hvort sem það er verslun, veitingastaður, eða þjónustufyrirtæki - er local SEO oft mikilvægara en hefðbundið SEO.

💡 **Pro tip:** 46% af öllum leitum á Google eru fyrir staðbundna þjónustu. Ef þú ert ekki að vinna í local SEO, ertu að missa af helmingi markaðarins.

## Google Business Profile - Grunnurinn

Það fyrsta sem þú þarft er að búa til og fínstilla Google Business Profile (áður Google My Business). Þetta er ókeypis og tekur 10 mínútur.

### Uppsetning í 5 skrefum:

- Farðu á business.google.com og búðu til profile
- Staðfestu eignarhald með póstkóða eða síma
- Fylltu út allar upplýsingar 100%
- Bættu við hágæða myndum
- Byrjaðu að safna umsögnum

ℹ️ **Athugið:** Fyrirtæki með fullkomið Google Business Profile eru **70% líklegri** til að fá viðskiptavini en þau sem eru með ófullnægjandi profile.

## Umsagnir - Lykillinn að velgengni

Umsagnir eru einn stærsti áhrifaþátturinn í local SEO. Google vill sýna fólki bestu fyrirtækin, og fjöldi + gæði umsagna er stór hluti af því.

### Hvernig á að fá fleiri umsagnir:

- Biddu um þær! Flestir viðskiptavinir skrifa umsögn ef þú biður
- Sendu follow-up email 2-3 dögum eftir kaup/þjónustu
- Gerðu það auðvelt - sendu beina hlekk á umsagnaform
- Svaraðu öllum umsögnum (bæði góðum og slæmum)

⚠️ **Viðvörun:** Keyptu ALDREI falsaðar umsagnir. Google uppgötvar þetta og refsir fyrirtækinu þínu harðlega.

## NAP Consistency - Nafn, heimilisfang, símanúmer

NAP stendur fyrir Name, Address, Phone number. Google athugar hvort upplýsingarnar þínar eru þær sömu á öllum vefsíðum og möppum.

Ef þú ert með "Bifvélaverkstæðið ehf" á einni síðu en "Bifvélaverkstæðið" á annarri, þá ruglar það Google. Vertu með nákvæmlega sömu upplýsingar alls staðar.

### Gátlisti:

- Vefsíðan þín
- Google Business Profile
- Facebook síða
- Já.is
- 112.is
- Allir aðrir staðir þar sem fyrirtækið birtist

## Staðbundið innihald

Búðu til innihald sem miðar að þinni svæði. Ekki bara "Besti bifvélaverkstæðið" heldur "Besti bifvélaverkstæðið í Reykjavík" eða "Bifvélaviðgerðir á Selfossi".

### Hugmyndir að staðbundnu efni:

- Bloggfærsla um staðbundna viðburði
- Leiðbeiningar sem miða að íslenskum aðstæðum
- Viðtöl við staðbundna viðskiptavini
- Myndir frá þinni svæði

✅ **Næstu skref:** Gerðu Google Business Profile audit í dag. Athugaðu hvort allar upplýsingar séu fullkomnar og bættu við 10 nýjum myndum.

## Linkar frá staðbundnum vefsíðum

Linkar frá öðrum vefsíðum eru ávallt mikilvægir fyrir SEO, en fyrir local SEO skiptir það máli hvaðan linkarnir koma. Linkar frá íslenskum vefsíðum og staðbundnum möppum eru verðmætir.

### Góðir staðir fyrir staðbundna linka:

- Já.is og 112.is
- Staðbundin fréttamiðlar
- Viðskiptaráð og félagasamtök
- Samstarfsfyrirtæki
- Styrkir staðbundnir bloggerar

## Mobile optimization

Flest local leit gerist á símanum. Ef vefsíðan þín er ekki mobile-friendly, ertu að tapa viðskiptavinum.

Prófaðu vefsíðuna þína á símanum þínum núna. Er hún hröð? Auðvelt að smella á takka? Eru símanúmer klikkanlegt?

## Mæling á árangri

Hvernig veist þú hvort local SEO sé að virka? Hér eru metrics sem skipta máli:

- Google Business Profile innblástur (skoðanir)
- Fjöldi símtala frá Google
- Route requests (hversu margir spyrja um leiðsögn)
- Fjöldi umsagna
- Meðaleinkun umsagna
- Staða í local pack (3 efstu niðurstöðurnar í Google Maps)

💡 **Pro tip:** Google Business Profile insights gefur þér ókeypis analytics. Athugaðu það vikulega.

## Niðurstaða

Local SEO er ekki eins flókið og hefðbundið SEO, en það krefst stöðugrar vinnu. Byrjaðu á grunnnum - Google Business Profile og umsagnir - og byggðu þaðan út.

Íslenski markaðurinn er lítill, sem þýðir að það er auðveldara að ná árangri en á stærri mörkuðum. En þú þarft að vera duglegur og þolinmóður.
`,
  },
};

/**
 * EXAMPLE: How an LLM should create a new blog post
 * 
 * Just provide a simple object with ID, meta description, tags, and markdown content.
 * The markdown will be automatically parsed and rendered.
 */
export const EXAMPLE_NEW_BLOG_POST = `
{
  "id": "your-blog-post-slug",
  "metaDescription": "Short SEO-friendly description (150-160 characters)",
  "tags": ["tag1", "tag2", "tag3"],
  "relatedPosts": ["other-post-id-1", "other-post-id-2"],
  "content": \`
## First Section Heading

Your content here with **bold text** and regular text.

💡 **Pro tip:** Your tip content here

- List item one
- List item two  
- List item three

### Sub-section

More content here.

⚠️ **Viðvörun:** Warning text here

\\\`\\\`\\\`
Code block content here
\\\`\\\`\\\`

## Second Section

More content.

✅ **Næstu skref:** Action items here
\`
}
`;