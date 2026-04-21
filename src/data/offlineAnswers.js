/**
 * offlineAnswers.js - Catholic apologetics knowledge base.
 * findOfflineAnswer(query, langCode) returns answer in the requested language or null.
 */

const KB = [
  {
    keywords: [
      'worship mary', 'worshipping mary', 'worship the virgin', 'mary worship',
      'sinasamba', 'sumamba kay maria', 'nagdarasal kay maria',
      'adoran a mar', 'veneran a mar', 'adoram maria', 'adorent marie',
      'adorano maria', 'menyembah maria', 'gisimba si maria',
      'gisimba sa mga katoliko', 'katoliko si maria',
    ],
    answers: {
      en: `⚡ Challenge: Catholics worship Mary just like they worship God.

 ✅ Answer: Catholics do NOT worship Mary. We honor (venerate) her as the greatest of all saints and the Mother of God, but worship (latria) is given to God alone. Honoring Mary is no different from honoring a great hero — it does not replace God. Mary always points us to her Son, Jesus.

 📖 Scripture: Luke 1:48 — "All generations will call me blessed." John 2:5 — Mary says, "Do whatever he tells you," directing all attention to Jesus.

 📜 Tradition: The Council of Ephesus (431 AD) declared Mary Theotokos (God-bearer) to honor Christ's divine nature, not to elevate Mary above God. St. Augustine and all early Fathers distinguished latria (worship of God) from dulia/hyperdulia (honor of saints).

 💬 Respond: "We honor Mary the way we honor a great mother — with love and respect. She is not a goddess; she is our intercessor who leads us closer to Jesus."`,
      ceb: `⚡ Hangyo: Ginasimba sa mga Katoliko si Maria sama sa ilang pagsimba sa Dios.

 ✅ Tubag: Ang mga Katoliko WALA magasimba kang Maria. Ginatahod (venerate) namo siya isip pinakadako sa tanang mga santos ug Inahan sa Dios, apan ang pagsimba (latria) gihatag lamang sa Dios. Ang pagtahod kang Maria susama sa pagtahod sa usa ka bantogan — dili kini makapuli sa Dios. Si Maria kanunay nagpunting kanato ngadto sa iyang Anak, si Hesus.

 📖 Kasulatan: Lucas 1:48 — "Ang tanang henerasyon motawag kanako nga bulahan." Juan 2:5 — Si Maria miingon, "Buhata ang tanan nga iyang isulti kaninyo."

 📜 Tradisyon: Ang Konsilyo sa Efeso (431 AD) nagdeklarar kang Maria nga Theotokos. Gipalahi sa mga Ama ang latria (pagsimba sa Dios) gikan sa dulia/hyperdulia (pagtahod sa mga santos).

 💬 Tubag: "Gitamod namo si Maria sama sa pagtagad sa usa ka inahan — uban sa gugma ug pagtahod. Siya ang atong intersesor nga nagdala kanato kang Hesus."`,
      fil: `⚡ Hamon: Sinasamba ng mga Katoliko si Maria tulad ng kanilang pagsamba sa Dios.

 ✅ Sagot: Hindi sinasamba ng mga Katoliko si Maria. Iginagalang (venerate) namin siya bilang pinakadakilang santos at Ina ng Dios, ngunit ang pagsamba (latria) ay para sa Dios lamang. Ang paggalang kay Maria ay hindi naiiba sa paggalang sa isang bayani — hindi ito pumapalit sa Dios.

 📖 Kasulatan: Lucas 1:48 — "Lahat ng henerasyon ay tatawag sa akin na pinagpala." Juan 2:5 — Sinabi ni Maria, "Gawin ninyo ang lahat ng sasabihin niya."

 📜 Tradisyon: Ang Konsilyo ng Efeso (431 AD) ay nagdeklara kay Maria na Theotokos. Kinilala ng lahat ng Ama ang latria (pagsamba sa Dios) mula sa dulia/hyperdulia (paggalang sa mga santo).

 💬 Sagot: "Iginalang namin si Maria tulad ng pagmahal sa isang ina — may pagmamahal at paggalang. Siya ang ating tagapamagitan na nagdadala sa atin kay Hesus."`,
      es: `⚡ Desafío: Los católicos adoran a María igual que adoran a Dios.

 ✅ Respuesta: Los católicos NO adoran a María. La veneramos como la más grande de todos los santos y Madre de Dios, pero la adoración (latria) se da solo a Dios. Honrar a María no es diferente a honrar a un gran héroe — no reemplaza a Dios.

 📖 Escritura: Lucas 1:48 — "Todas las generaciones me llamarán bienaventurada." Juan 2:5 — María dice: "Haced todo lo que él os diga."

 📜 Tradición: El Concilio de Éfeso (431 d.C.) declaró a María Theotokos (Madre de Dios) para honrar la naturaleza divina de Cristo. Los Padres distinguieron la latria (adoración a Dios) de la dulia/hiperdulía (honor a los santos).

 💬 Responder: "Honramos a María como a una gran madre — con amor y respeto. No es una diosa; es nuestra intercesora que nos lleva más cerca de Jesús."`,
    },
  },
  {
    keywords: [
      'pray to saints', 'praying to saints', 'saints intercession', 'dead saints', 'saints are dead',
      'rezar a los santos', 'orar a los santos', 'manalangin sa mga santo',
      'rezar aos santos', 'prier les saints', 'pregare i santi', 'berdoa kepada orang kudus',
      'pag-ampo sa mga santo', 'ampo sa mga santo',
    ],
    answers: {
      en: `⚡ Challenge: Praying to saints is wrong because they are dead and only God hears prayers.

 ✅ Answer: Catholics ask saints to intercede for us — just as we ask a living friend to pray for us. Saints are not dead; they are alive in Christ (Luke 20:38). Asking a saint to pray is no different from asking a brother or sister in church to pray for you, except saints are even closer to God.

 📖 Scripture: Revelation 5:8 — the elders in heaven offer "golden bowls full of incense, which are the prayers of God's people." James 5:16 — "The prayer of a righteous person is powerful and effective."

 📜 Tradition: Origen (3rd century) and all early Christians prayed for the intercession of martyrs. The Catacomb inscriptions show Christians asking Peter, Paul, and Mary to intercede.

 💬 Respond: "We don't pray TO saints the way we pray TO God. We ask them to pray FOR us, trusting they are alive with Christ and hear our requests through Him."`,
      ceb: `⚡ Hangyo: Sayop ang pag-ampo sa mga santos kay patay na sila ug ang Dios lamang ang nakadungog sa mga pag-ampo.

 ✅ Tubag: Ang mga Katoliko nagpangayo sa mga santos nga mag-alagad alang kanato — sama sa pagpangayo sa usa ka buhi nga higala nga mag-ampo alang kanato. Ang mga santos dili patay; buhi sila kang Kristo (Lucas 20:38). Ang pagpangayo sa usa ka santos nga mag-ampo mao ra ang pagpangayo sa usa ka igsoon sa simbahan, gawas nga labi silang duol sa Dios.

 📖 Kasulatan: Pinadayag 5:8 — ang mga anciano sa langit naghalad ug "mga bulawan nga panaksan puno sa insenso, nga mao ang mga pag-ampo sa katawhan sa Dios." Santiago 5:16 — "Ang pag-ampo sa usa ka matarong tawo gamhanan ug epektibo."

 📜 Tradisyon: Si Origen (ika-3 siglo) ug tanang unang mga Kristiyano nag-ampo alang sa pagpaluyo sa mga martir. Ang mga inskripsiyon sa Catacomb nagpakita nga ang mga Kristiyano nagpangayo kang Pedro, Pablo, ug Maria nga mag-agad.

 💬 Tubag: "Dili kami mag-ampo SA mga santos sama sa pag-ampo SA Dios. Gipangayo namo sila nga mag-ampo ALANG kanato, nagtuo nga buhi sila kang Kristo."`,
      fil: `⚡ Hamon: Mali ang manalangin sa mga santo dahil patay na sila at ang Dios lamang ang nakaririnig ng mga panalangin.

 ✅ Sagot: Ang mga Katoliko ay humihingi sa mga santo na mamagitan para sa atin — tulad ng paghingi sa isang buhay na kaibigan na manalangin para sa atin. Ang mga santo ay hindi patay; buhay sila kay Kristo (Lucas 20:38).

 📖 Kasulatan: Pahayag 5:8 — ang mga matatanda sa langit ay nag-aalok ng "mga gintong mangkok na puno ng insenso, na siyang mga panalangin ng bayan ng Dios." Santiago 5:16 — "Ang panalangin ng matuwid ay may kapangyarihan."

 📜 Tradisyon: Si Origenes (ika-3 siglo) at lahat ng unang mga Kristiyano ay nanalangin para sa pamamagitan ng mga martir.

 💬 Sagot: "Hindi tayo nanalangin SA mga santo tulad ng panalangin SA Dios. Hinahiling natin sila na manalangin PARA sa atin, nagtitiwala na buhay sila kay Kristo."`,
      es: `⚡ Desafío: Rezar a los santos está mal porque están muertos y solo Dios escucha las oraciones.

 ✅ Respuesta: Los católicos pedimos a los santos que intercedan por nosotros — igual que pedimos a un amigo vivo que ore por nosotros. Los santos no están muertos; están vivos en Cristo (Lucas 20:38).

 📖 Escritura: Apocalipsis 5:8 — los ancianos en el cielo ofrecen "copas de oro llenas de incienso, que son las oraciones de los santos." Santiago 5:16 — "La oración del justo es poderosa y eficaz."

 📜 Tradición: Orígenes (siglo III) y todos los primeros cristianos oraban pidiendo la intercesión de los mártires.

 💬 Responder: "No oramos A los santos como oramos A Dios. Les pedimos que oren POR nosotros, confiando en que están vivos con Cristo."`,
    },
  },
  {
    keywords: [
      'pope infallible', 'pope not infallible', 'papal infallibility', 'pope wrong',
      'papa infalible', 'papa no es infalible', 'papa infalivel', 'pape infaillible',
      'papa infallibile', 'infallible ang papa', 'paus tidak infallible',
      'ang papa dili infallible', 'papa dili infallible',
    ],
    answers: {
      en: `⚡ Challenge: The Pope is not infallible — he is just a man and can make mistakes.

 ✅ Answer: Papal infallibility is very limited. It applies ONLY when the Pope speaks ex cathedra on matters of faith and morals for the whole Church. It has been formally invoked only twice in modern history (1854 and 1950). It does not mean every word the Pope says is perfect.

 📖 Scripture: Matthew 16:18-19 — "You are Peter, and on this rock I will build my church." Luke 22:32 — Jesus prays that Peter's faith "may not fail" so he can strengthen his brothers.

 📜 Tradition: Vatican I (1870) formally defined papal infallibility with very strict conditions. The early Church consistently looked to Rome for final resolution of doctrinal disputes.

 💬 Respond: "Infallibility is much narrower than most people think. It's about protecting the Church from official error in doctrine — not claiming the Pope is sinless or always wise in every area."`,
      ceb: `⚡ Hangyo: Ang Papa dili infallible — tawo ra siya ug mahimong makasayop.

 ✅ Tubag: Ang infallibility sa Papa dako kaayo ang limitasyon. Magamit lamang kini kung ang Papa mosulti ex cathedra bahin sa mga butang sa pagtuo ug moralidad alang sa tibuok Simbahan. Duha ra kini nailhap sa kasaysayan (1854 ug 1950).

 📖 Kasulatan: Mateo 16:18-19 — "Ikaw si Pedro, ug sa ibabaw niining bato tukuron ko ang akong simbahan." Lucas 22:32 — Gipangamuyo ni Hesus nga ang pagtuo ni Pedro "dili mapakyas."

 📜 Tradisyon: Ang Vatican I (1870) nagpormal nga naghubit sa infallibility sa Papa uban sa estrikto nga kondisyon.

 💬 Tubag: "Ang infallibility labi ka kitid kaysa sa hunahuna sa kadaghanan. Kini bahin sa pagpanalipod sa Simbahan gikan sa opisyal nga sayop sa doktrina — dili pagklaim nga ang Papa walay sala."`,
      fil: `⚡ Hamon: Hindi infallible ang Papa — isang tao lamang siya at maaaring magkamali.

 ✅ Sagot: Ang infallibility ng Papa ay may maliit na saklaw. Naaangkop ito LAMANG kapag ang Papa ay nagsasalita ex cathedra tungkol sa mga bagay ng pananampalataya at moralidad para sa buong Simbahan. Dalawang beses lamang ito nailapat sa modernong kasaysayan (1854 at 1950).

 📖 Kasulatan: Mateo 16:18-19 — "Ikaw ay Pedro, at sa ibabaw ng batong ito itatayo ko ang aking simbahan." Lucas 22:32 — Ipinanalangin ni Hesus na ang pananampalataya ni Pedro ay "hindi mapapababa."

 📜 Tradisyon: Ang Vatican I (1870) ay pormalmenteng nagbigay-kahulugan sa infallibility ng Papa na may mahigpit na mga kondisyon.

 💬 Sagot: "Ang infallibility ay mas limitado kaysa sa inaakala ng karamihan. Ito ay tungkol sa pagprotekta ng Simbahan mula sa opisyal na pagkakamali sa doktrina."`,
      es: `⚡ Desafío: El Papa no es infalible — es solo un hombre y puede cometer errores.

 ✅ Respuesta: La infalibilidad papal es muy limitada. Solo se aplica cuando el Papa habla ex cathedra sobre materias de fe y moral para toda la Iglesia. Solo se ha invocado formalmente dos veces en la historia moderna (1854 y 1950).

 📖 Escritura: Mateo 16:18-19 — "Tú eres Pedro, y sobre esta roca edificaré mi iglesia." Lucas 22:32 — Jesús ora para que la fe de Pedro "no falle."

 📜 Tradición: El Vaticano I (1870) definió formalmente la infalibilidad papal con condiciones muy estrictas.

 💬 Responder: "La infalibilidad es mucho más limitada de lo que la mayoría piensa. Se trata de proteger a la Iglesia del error oficial en doctrina."`,
    },
  },
  {
    keywords: [
      'purgatory bible', 'purgatory not in bible', 'purgatory scripture', 'purgatory unbiblical',
      'purgatorio', 'purgatoire', 'purgatoryo wala sa bibliya',
      'api penyucian', 'ang purgatoryo wala', 'purgatoryo dili',
    ],
    answers: {
      en: `⚡ Challenge: Purgatory is not in the Bible — it was invented by the Catholic Church.

 ✅ Answer: While the word "purgatory" isn't in the Bible, the concept clearly is. Scripture teaches a purification after death for those who are not perfectly holy, and prayers for the dead have been part of God's people from ancient times.

 📖 Scripture: 2 Maccabees 12:46 — "It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins." 1 Corinthians 3:15 — "He himself will be saved, but only as through fire."

 📜 Tradition: The early Church prayed for the dead as far back as the 2nd century (Tertullian, Origen). Inscriptions in the Roman catacombs from the 1st-3rd centuries ask for mercy on the souls of the departed.

 💬 Respond: "Purgatory is simply the teaching that God's love purifies us completely before we see Him. Even many Protestants believe in a purification process — they just may call it something different."`,
      ceb: `⚡ Hangyo: Ang Purgatoryo wala sa Bibliya — gihimo kini sa Simbahang Katoliko.

 ✅ Tubag: Bisan kung ang pulong "purgatoryo" wala sa Bibliya, ang konsepto naa. Nagtudlo ang Kasulatan bahin sa pagputli human sa kamatayon alang sa mga dili hingpit nga balaan, ug ang mga pag-ampo alang sa mga patay kabahin na sa katawhan sa Dios sukad pa sa karaan.

 📖 Kasulatan: 2 Macabeo 12:46 — "Busa usa kini ka balaan ug maayo nga hunahuna ang mag-ampo alang sa mga patay, aron mapagawas sila sa mga sala." 1 Corinto 3:15 — "Maluwas siya, apan sama sa pinaagi sa kalayo."

 📜 Tradisyon: Ang unang Simbahan nag-ampo alang sa mga patay sukad pa sa ika-2 siglo (Tertullian, Origen).

 💬 Tubag: "Ang Purgatoryo mao lamang ang pagtudlo nga ang gugma sa Dios magputli kanato sa hingpit sa dili pa niya kita makita. Bisan ang daghang mga Protestante nagtuo sa proseso sa pagputli."`,
      fil: `⚡ Hamon: Ang Purgatoryo ay wala sa Bibliya — imbento ito ng Simbahang Katoliko.

 ✅ Sagot: Bagaman ang salitang "purgatoryo" ay wala sa Bibliya, ang konsepto ay malinaw na naroroon. Itinuturo ng Kasulatan ang isang paglilinis pagkatapos ng kamatayan para sa mga hindi ganap na banal.

 📖 Kasulatan: 2 Macabeo 12:46 — "Isang banal at malusog na kaisipan ang manalangin para sa mga patay, upang mapalaya sila sa mga kasalanan." 1 Corinto 3:15 — "Siya mismo ay maliligtas, ngunit tulad ng sa pamamagitan ng apoy."

 📜 Tradisyon: Ang unang Simbahan ay nanalangin para sa mga patay noong ika-2 siglo pa (Tertullian, Origen).

 💬 Sagot: "Ang Purgatoryo ay ang pagtuturo na ang pagmamahal ng Dios ay lulunis sa atin nang ganap bago niya tayo makita."`,
      es: `⚡ Desafío: El Purgatorio no está en la Biblia — fue inventado por la Iglesia Católica.

 ✅ Respuesta: Aunque la palabra "purgatorio" no está en la Biblia, el concepto claramente sí. Las Escrituras enseñan una purificación después de la muerte para los que no son perfectamente santos.

 📖 Escritura: 2 Macabeos 12:46 — "Por eso es un pensamiento santo y saludable orar por los muertos, para que sean librados de sus pecados." 1 Corintios 3:15 — "Él mismo se salvará, pero como a través del fuego."

 📜 Tradición: La Iglesia primitiva oraba por los muertos ya desde el siglo II (Tertuliano, Orígenes).

 💬 Responder: "El Purgatorio es simplemente la enseñanza de que el amor de Dios nos purifica completamente antes de que le veamos."`,
    },
  },
  {
    keywords: [
      'added books', 'deuterocanon', 'apocrypha', 'extra books bible', 'catholic bible books', 'removed books',
      'nagdagdag ng libro', 'anadieron libros', 'acrescentaram livros', 'ajoute des livres',
      'nagdugang og libro', 'dugang libro sa bibliya',
    ],
    answers: {
      en: `⚡ Challenge: Catholics added books to the Bible (the Apocrypha/Deuterocanon).

 ✅ Answer: Catholics did not ADD books — Protestants REMOVED them during the Reformation. The 7 deuterocanonical books were in the Septuagint used by Jesus and the Apostles, and in the Christian Bible for 1,500 years before Luther removed them in the 1500s.

 📖 Scripture: The New Testament quotes the Septuagint (which includes these books) hundreds of times. Hebrews 11:35 alludes to 2 Maccabees 7.

 📜 Tradition: The Council of Hippo (393 AD) and Council of Carthage (397 AD) canonized the 46-book Old Testament used by Catholics. This was the universal Christian canon for over a millennium before the Reformation.

 💬 Respond: "The question isn't whether Catholics added books, but why Luther removed books that the Church had used for 1,500 years. The historical evidence is on the Catholic side."`,
      ceb: `⚡ Hangyo: Nagdugang og libro ang mga Katoliko sa Bibliya.

 ✅ Tubag: Ang mga Katoliko wala MAGDUGANG og libro — ang mga Protestante mao ang NAGKUHA kanila sa panahon sa Repormasyon. Ang 7 ka deuterocanonical nga libro anaa sa Septuagint nga gigamit ni Hesus ug sa mga Apostoles, ug sa Kristohanong Bibliya sulod sa 1,500 ka tuig sa wala pa sila kuhaon ni Luther.

 📖 Kasulatan: Ang Bag-ong Tipan nagkutlo sa Septuagint (lakip niini kining mga libro) gatusan ka beses.

 📜 Tradisyon: Ang Konsilyo sa Hippo (393 AD) ug Konsilyo sa Carthage (397 AD) nagkanonisa sa 46-ka-libro nga Daang Tipan nga gigamit sa mga Katoliko.

 💬 Tubag: "Ang pangutana dili kung ang mga Katoliko nagdugang og libro, kondili ngano nga gikuha ni Luther ang mga libro nga gigamit sa Simbahan sulod sa 1,500 ka tuig."`,
      fil: `⚡ Hamon: Nagdagdag ang mga Katoliko ng mga libro sa Bibliya.

 ✅ Sagot: Ang mga Katoliko ay hindi NAGDAGDAG ng mga libro — ang mga Protestante ang NAG-ALIS ng mga ito noong Repormasyon. Ang 7 deuterocanonical na mga libro ay nasa Septuagint na ginamit ni Hesus at ng mga Apostol, at nasa Kristiyanong Bibliya sa loob ng 1,500 taon bago sila inalis ni Luther.

 📖 Kasulatan: Ang Bagong Tipan ay sumipi sa Septuagint (na kinabibilangan ng mga librong ito) nang daan-daang beses.

 📜 Tradisyon: Ang Konsilyo ng Hippo (393 AD) at Konsilyo ng Carthage (397 AD) ay nagkanon ng 46-na-aklat na Lumang Tipan na ginagamit ng mga Katoliko.

 💬 Sagot: "Ang tanong ay hindi kung ang mga Katoliko ay nagdagdag ng mga libro, kundi kung bakit tinanggal ni Luther ang mga librong ginamit ng Simbahan sa loob ng 1,500 taon."`,
      es: `⚡ Desafío: Los católicos añadieron libros a la Biblia (los Apócrifos/Deuterocanónicos).

 ✅ Respuesta: Los católicos no AÑADIERON libros — los Protestantes los QUITARON durante la Reforma. Los 7 libros deuterocanónicos estaban en la Septuaginta usada por Jesús y los Apóstoles, y en la Biblia cristiana durante 1,500 años antes de que Lutero los eliminara.

 📖 Escritura: El Nuevo Testamento cita la Septuaginta (que incluye estos libros) cientos de veces.

 📜 Tradición: El Concilio de Hipona (393 d.C.) y el de Cartago (397 d.C.) canonizaron el Antiguo Testamento de 46 libros utilizado por los católicos.

 💬 Responder: "La pregunta no es si los católicos añadieron libros, sino por qué Lutero quitó libros que la Iglesia había usado durante 1,500 años."`,
    },
  },
  {
    keywords: [
      'confession priest', 'confess priest', 'confession unbiblical', 'why confess priest', 'priest forgive sins',
      'confesarse con un sacerdote', 'kumumpsal sa pari', 'kumpisal sa pari',
      'confissao ao padre', 'confession au pretre', 'pengakuan dosa kepada imam',
      'pagkumpisal sa pari', 'dili biblikal ang pagkumpisal',
    ],
    answers: {
      en: `⚡ Challenge: Confessing to a priest is unbiblical — we should confess only to God.

 ✅ Answer: Jesus gave the Apostles — and through them, their successors — the authority to forgive sins. Confession to a priest is not instead of God forgiving; it IS God forgiving, through the ministry He established. The priest acts in persona Christi (in the person of Christ).

 📖 Scripture: John 20:22-23 — Jesus breathes on the Apostles and says, "Receive the Holy Spirit. If you forgive anyone's sins, their sins are forgiven; if you do not forgive them, they are not forgiven." James 5:16 — "Confess your sins to each other."

 📜 Tradition: Confession to a bishop or priest is documented from the earliest Christian writings (Didache, St. Ignatius of Antioch, Tertullian). It was the universal practice of the early Church.

 💬 Respond: "Jesus clearly gave the Apostles the power to forgive or retain sins — that power had to go somewhere! Catholics believe it was passed on through apostolic succession to priests today."`,
      ceb: `⚡ Hangyo: Dili biblikal ang pagkumpisal sa pari — kinahanglan tang magkumpisal sa Dios lamang.

 ✅ Tubag: Gihatag ni Hesus sa mga Apostoles — ug pinaagi kanila, sa ilang mga kasuneod — ang awtoridad sa pagpasaylo sa mga sala. Ang pagkumpisal sa pari dili imbis sa pagpasaylo sa Dios; kini ANG pagpasaylo sa Dios, pinaagi sa ministeryo nga iyang gitukod.

 📖 Kasulatan: Juan 20:22-23 — Si Hesus misungo sa mga Apostoles ug miingon, "Dawata ang Espiritu Santo. Kung pasaylohon ninyo ang sala sa bisan kinsa, pasayloon kini; kung dili ninyo pasaylohon, dili kini pasayloon." Santiago 5:16 — "Magkumpisal kamo sa inyong mga sala sa usa'g-usa."

 📜 Tradisyon: Ang pagkumpisal sa usa ka obispo o pari dokumentado gikan sa pinakaunang mga Kristohanong sinulat.

 💬 Tubag: "Gihatag ni Hesus sa mga Apostoles ang gahum sa pagpasaylo o pagtipig sa mga sala — kinahanglan adunay lugar ang gahum nga kana! Ang mga Katoliko nagtuo nga kini gipasa pinaagi sa apostolikong sunodsunod."`,
      fil: `⚡ Hamon: Hindi biblikal ang pagkukumpisal sa pari — dapat tayong kumumpisal sa Dios lamang.

 ✅ Sagot: Ibinigay ni Hesus sa mga Apostol — at sa pamamagitan nila, sa kanilang mga kahalili — ang awtoridad na patawarin ang mga kasalanan. Ang pagkukumpisal sa pari ay hindi kahalili ng pagpapatawad ng Dios; ito AY ang pagpapatawad ng Dios, sa pamamagitan ng ministeryo na Kanyang itinatag.

 📖 Kasulatan: Juan 20:22-23 — Hiningahan ni Hesus ang mga Apostol at sinabi, "Tanggapin ninyo ang Espiritu Santo. Kung patawarin ninyo ang kasalanan ng sinuman, patatawarin sila; kung hindi ninyo patawarin, hindi sila patatawarin." Santiago 5:16 — "Magtapat kayo ng inyong mga kasalanan sa isa't isa."

 📜 Tradisyon: Ang pagkukumpisal sa isang obispo o pari ay dokumentado mula sa pinakamaagang mga sulatin ng Kristiyanismo.

 💬 Sagot: "Malinaw na ibinigay ni Hesus sa mga Apostol ang kapangyarihang magpatawad o magtago ng mga kasalanan — kailangang may napuntahan ang kapangyarihang iyon!"`,
      es: `⚡ Desafío: Confesarse con un sacerdote no es bíblico — solo debemos confesarnos con Dios.

 ✅ Respuesta: Jesús dio a los Apóstoles — y a través de ellos, a sus sucesores — la autoridad de perdonar los pecados. La confesión al sacerdote no es en lugar del perdón de Dios; ES el perdón de Dios, a través del ministerio que Él estableció.

 📖 Escritura: Juan 20:22-23 — Jesús sopla sobre los Apóstoles y dice, "Recibid el Espíritu Santo. A quienes perdonéis los pecados, les son perdonados." Santiago 5:16 — "Confesaos unos a otros vuestros pecados."

 📜 Tradición: La confesión a un obispo o sacerdote está documentada desde los primeros escritos cristianos (Didaché, San Ignacio de Antioquía, Tertuliano).

 💬 Responder: "Jesús claramente dio a los Apóstoles el poder de perdonar o retener los pecados — ¡ese poder tenía que ir a algún lugar! Los católicos creen que fue transmitido por sucesión apostólica."`,
    },
  },
  {
    keywords: [
      'catholics not saved', 'catholics unsaved', 'are catholics christian', 'catholics going to hell',
      'catolicos no estan salvados', 'hindi naliligtas ang mga katoliko',
      'catolicos nao estao salvos', 'catholiques ne sont pas sauves', 'umat katolik tidak diselamatkan',
      'ang mga katoliko dili naluwas', 'katoliko dili naluwas',
    ],
    answers: {
      en: `⚡ Challenge: Catholics are not saved because they add works to faith.

 ✅ Answer: Catholics believe salvation is entirely a gift of God's grace — we cannot earn it. However, Scripture teaches that genuine faith naturally produces works, and that we must cooperate with God's grace. The Catholic view is not "faith + works = salvation" but rather "saving faith is a living faith that works through love."

 📖 Scripture: Ephesians 2:8-10 — "By grace you have been saved through faith… not of works… For we are God's handiwork, created in Christ Jesus to do good works." James 2:24 — "A person is justified by works and not by faith alone."

 📜 Tradition: The Council of Trent (1547) affirmed that justification is by grace alone, received through faith, and that it bears fruit in good works — not that works earn salvation.

 💬 Respond: "Catholics and many Protestants actually agree that true saving faith transforms a person's life. The difference is often more about terminology than substance."`,
      ceb: `⚡ Hangyo: Ang mga Katoliko dili naluwas kay nagdugang sila og mga buhat sa pagtuo.

 ✅ Tubag: Ang mga Katoliko nagtuo nga ang kaluwasan usa ka gasa sa grasya sa Dios — dili namo kini makuha pinaagi sa atong kaugalingon. Apan, nagtudlo ang Kasulatan nga ang tinuod nga pagtuo natural nga nagbunga og mga buhat.

 📖 Kasulatan: Mga Taga-Efeso 2:8-10 — "Kay sa grasya kamo naluwas pinaagi sa pagtuo... dili gikan sa inyong kaugalingon." Santiago 2:24 — "Ang tawo gipakamatarong sa mga buhat ug dili sa pagtuo lamang."

 📜 Tradisyon: Ang Konsilyo sa Trent (1547) nagpagkit nga ang pagpakamatarong pinaagi sa grasya lamang, nadawat pinaagi sa pagtuo, ug nagbunga kini sa maayong mga buhat.

 💬 Tubag: "Ang mga Katoliko ug daghang Protestante nagkauyonan nga ang tinuod nga pagtuo nagbag-o sa kinabuhi sa usa ka tawo."`,
      fil: `⚡ Hamon: Hindi naliligtas ang mga Katoliko dahil nagdadagdag sila ng mga gawa sa pananampalataya.

 ✅ Sagot: Ang mga Katoliko ay naniniwala na ang kaligtasan ay isang ganap na kaloob ng grasya ng Dios — hindi natin ito maaaring makuha sa ating sarili. Gayunpaman, itinuturo ng Kasulatan na ang tunay na pananampalataya ay natural na nagbubunga ng mga gawa.

 📖 Kasulatan: Mga Taga-Efeso 2:8-10 — "Sapagkat sa biyaya kayo naligtas sa pamamagitan ng pananampalataya... hindi mula sa inyong sarili." Santiago 2:24 — "Isang tao ay inaaringganap ng mga gawa at hindi ng pananampalataya lamang."

 📜 Tradisyon: Ang Konsilyo ng Trent (1547) ay nagpahayag na ang pagaaringanap ay sa pamamagitan ng grasya lamang, tinatanggap sa pamamagitan ng pananampalataya.

 💬 Sagot: "Ang mga Katoliko at maraming Protestante ay nagkakasundo na ang tunay na pananampalatayang nagliligtas ay nagbabago ng buhay ng isang tao."`,
      es: `⚡ Desafío: Los católicos no están salvados porque añaden obras a la fe.

 ✅ Respuesta: Los católicos creemos que la salvación es totalmente un don de la gracia de Dios — no podemos ganárnosla. Sin embargo, las Escrituras enseñan que la fe genuina produce naturalmente obras buenas.

 📖 Escritura: Efesios 2:8-10 — "Porque por gracia sois salvos por medio de la fe... no por obras." Santiago 2:24 — "El hombre es justificado por las obras, y no solamente por la fe."

 📜 Tradición: El Concilio de Trento (1547) afirmó que la justificación es solo por gracia, recibida por la fe, y que produce fruto en buenas obras.

 💬 Responder: "Los católicos y muchos protestantes en realidad están de acuerdo en que la fe salvadora verdadera transforma la vida de una persona."`,
    },
  },
  {
    keywords: [
      'statues idolatry', 'images idolatry', 'graven images', 'catholic idols', 'worship statues',
      'estatuas idolat', 'rebulto ay idolatriya', 'mga imahen at rebulto',
      'estatuas idolat', 'statues idolat', 'patung penyembahan berhala',
      'mga larawan ug rebulto idolatriya', 'rebulto idolatriya',
    ],
    answers: {
      en: `⚡ Challenge: Catholic statues and images are idolatry, forbidden by God.

 ✅ Answer: God forbids worshipping idols — making a statue or image of something and treating it as a god. He does NOT forbid all images; in fact, He commanded images in the Temple (bronze serpent, cherubim on the Ark). Catholics do not worship statues; they use them as visual reminders of holy people, just like a photo of a loved one.

 📖 Scripture: Numbers 21:8-9 — God commands Moses to make a bronze serpent as a means of healing. Exodus 25:18 — God commands golden cherubim on the Ark of the Covenant. The commandment (Exodus 20:4-5) forbids making idols TO WORSHIP, not all artistic representations.

 📜 Tradition: The Second Council of Nicaea (787 AD) defined the distinction between latria (worship, due to God alone) and veneration (honor shown to images). Icons and sacred art have been part of Christian worship since the earliest centuries.

 💬 Respond: "The issue isn't the statue — it's what you do with it. Catholics venerate (honor) what the image represents; they don't worship the material object. Every Protestant church has a cross — that's also an image."`,
      ceb: `⚡ Hangyo: Ang mga rebulto ug larawan sa mga Katoliko idolatriya, gidili sa Dios.

 ✅ Tubag: Ang Dios nagdili sa pagsimba sa mga idolo — paghimo og rebulto o larawan ug pagtrato niini isip usa ka dios. Wala niya GIDILI ang tanang mga larawan; sa tinuod, nagsugo siya og mga larawan sa Templo (bronse nga halas, mga querubin sa Arka). Ang mga Katoliko wala magsimba sa mga rebulto; gigamit namo kini isip biswal nga pahinumdom sa mga balaan.

 📖 Kasulatan: Mga Numero 21:8-9 — Nagsugo ang Dios kang Moises sa paghimo og bronse nga halas isip paagi sa pagpanghilom. Exodo 25:18 — Nagsugo ang Dios og mga bulawan nga querubin sa Arka.

 📜 Tradisyon: Ang Ikaduhang Konsilyo sa Nicaea (787 AD) naghubit sa kalainan tali sa latria (pagsimba, alang sa Dios lamang) ug venerasyon (pagtahod sa mga larawan).

 💬 Tubag: "Ang isyo dili ang rebulto — kondili ang imong buhaton niini. Gitatahod sa mga Katoliko ang ginagahin sa larawan; dili namo simbahon ang materyal nga butang."`,
      fil: `⚡ Hamon: Ang mga rebulto at larawan ng mga Katoliko ay idolatriya, ipinagbawal ng Dios.

 ✅ Sagot: Ipinagbawal ng Dios ang pagsamba sa mga idolo — ang paggawa ng rebulto o larawan ng isang bagay at pagtrato dito bilang isang dios. HINDI Niya ipinagbawal ang lahat ng larawan; sa katunayan, nag-utos Siya ng mga larawan sa Templo (tanso na ahas, mga querubin sa Arka). Ang mga Katoliko ay hindi sumasamba sa mga rebulto; ginagamit namin ang mga ito bilang biswal na paalala ng mga banal.

 📖 Kasulatan: Mga Bilang 21:8-9 — Inutusan ng Dios si Moises na gumawa ng tanso na ahas bilang paraan ng pagpapagaling. Exodo 25:18 — Inutusan ng Dios ng gintong mga querubin sa Arka.

 📜 Tradisyon: Ang Ikalawang Konsilyo ng Nicaea (787 AD) ay nagbigay-kahulugan sa pagkakaiba sa pagitan ng latria (pagsamba, para sa Dios lamang) at venerasyon (paggalang na ipinapakita sa mga larawan).

 💬 Sagot: "Ang isyu ay hindi ang rebulto — kundi kung ano ang iyong ginagawa dito. Iginagalang ng mga Katoliko ang kinakatawan ng larawan; hindi namin sinasamba ang materyal na bagay."`,
      es: `⚡ Desafío: Las estatuas e imágenes católicas son idolatría, prohibidas por Dios.

 ✅ Respuesta: Dios prohíbe adorar ídolos — hacer una estatua o imagen de algo y tratarla como un dios. NO prohíbe todas las imágenes; de hecho, ordenó imágenes en el Templo (la serpiente de bronce, los querubines en el Arca). Los católicos no adoran estatuas; las usan como recordatorios visuales de personas santas.

 📖 Escritura: Números 21:8-9 — Dios manda a Moisés hacer una serpiente de bronce como medio de curación. Éxodo 25:18 — Dios manda querubines de oro en el Arca.

 📜 Tradición: El Segundo Concilio de Nicea (787 d.C.) definió la distinción entre latria (adoración, solo a Dios) y veneración (honor mostrado a las imágenes).

 💬 Responder: "El problema no es la estatua — es lo que haces con ella. Los católicos veneran lo que la imagen representa; no adoran el objeto material."`,
    },
  },
  {
    keywords: [
      'mass sacrifice', 'mass not sacrifice', 'eucharist sacrifice', 'once for all sacrifice', 'mass re-sacrifice',
      'misa no es sacrificio', 'misa ay hindi sakripisyo', 'misa hindi sakripisyo',
      'missa nao e sacrificio', 'messe sacrifice', 'misa bukan pengorbanan',
      'ang misa dili sakripisyo', 'misa dili sakripisyo',
    ],
    answers: {
      en: `⚡ Challenge: The Mass is not a sacrifice — Christ died once for all.

 ✅ Answer: Catholics agree Christ died ONCE for all (Hebrews 10:10). The Mass does not re-crucify Christ; it makes the ONE sacrifice of Calvary sacramentally present. It is the same sacrifice, offered once in history but applied to each generation through the Eucharist.

 📖 Scripture: Hebrews 7:24-25 — Christ "always lives to intercede" as our eternal High Priest. Revelation 5:6 — in heaven, Christ appears as "a Lamb, looking as if it had been slain." Malachi 1:11 — prophecy of a "pure offering" in every place.

 📜 Tradition: Justin Martyr (2nd century) explicitly called the Eucharist a "sacrifice" and connected it to Malachi's prophecy. All early Church Fathers spoke of the Eucharist as the Church's sacrifice.

 💬 Respond: "The Mass isn't adding a new sacrifice — it's the same one, made present. Think of it like how Passover wasn't a new exodus but a re-living of the original one for each generation."`,
      ceb: `⚡ Hangyo: Ang Misa dili sakripisyo — si Kristo namatay kausa alang sa tanan.

 ✅ Tubag: Nagkauyonan ang mga Katoliko nga si Kristo namatay KAUSA alang sa tanan (Mga Hebreohanon 10:10). Ang Misa wala magusab sa pagkrusipikar kang Kristo; gibuhat niini nga present sakramentalmente ang IUSANG sakripisyo sa Kalbaryo. Mao kini ang samang sakripisyo, gihalad kausa sa kasaysayan apan giaplikar sa matag henerasyon pinaagi sa Eukaristiya.

 📖 Kasulatan: Mga Hebreohanon 7:24-25 — Si Kristo "kanunay nagkinabuhi sa pagpangalagad" isip atong walay katapusan nga Pangulong Pari. Pinadayag 5:6 — sa langit, si Kristo makita isip "usa ka Nating Karnero, ingon nga gipatay."

 📜 Tradisyon: Si Justin Martyr (ika-2 siglo) tin-aw nga nagtawag sa Eukaristiya nga "sakripisyo."

 💬 Tubag: "Ang Misa wala magdugang og bag-ong sakripisyo — mao kini ang sama, gipresentar. Hunahunaa kini sama sa kung giunsa ang Paskua dili usa ka bag-ong paglabay sa kadagatan kondili usa ka pagpabag-ong pag-eksperiensiyo sa orihinal."`,
      fil: `⚡ Hamon: Ang Misa ay hindi isang sakripisyo — namatay si Kristo nang isang beses para sa lahat.

 ✅ Sagot: Sang-ayon ang mga Katoliko na si Kristo ay namatay ISANG BESES para sa lahat (Mga Hebreo 10:10). Ang Misa ay hindi muling ipinagpapako si Kristo; ginagawa nitong naroroon sakramentalmente ang IISANG sakripisyo ng Kalbaryo. Ito ang parehong sakripisyo, inialay nang isang beses sa kasaysayan ngunit inilalapat sa bawat henerasyon sa pamamagitan ng Eukaristiya.

 📖 Kasulatan: Mga Hebreo 7:24-25 — Si Kristo "laging nabubuhay upang mamagitan" bilang ating walang hanggang Mataas na Saserdote. Pahayag 5:6 — sa langit, si Kristo ay lilitaw bilang "isang Kordero, na parang pinatay."

 📜 Tradisyon: Si Justin Martyr (ika-2 siglo) ay malinaw na tinawag ang Eukaristiya na "sakripisyo."

 💬 Sagot: "Ang Misa ay hindi nagdadagdag ng bagong sakripisyo — ito ang parehong sakripisyo, ginagawang naroroon. Isipin ito tulad ng kung paano ang Paskwa ay hindi isang bagong paglabas mula sa Ehipto kundi isang muling pagdanas ng orihinal para sa bawat henerasyon."`,
      es: `⚡ Desafío: La Misa no es un sacrificio — Cristo murió de una vez para siempre.

 ✅ Respuesta: Los católicos estamos de acuerdo en que Cristo murió UNA VEZ para siempre (Hebreos 10:10). La Misa no re-crucifica a Cristo; hace presente sacramentalmente el ÚNICO sacrificio del Calvario. Es el mismo sacrificio, ofrecido una vez en la historia pero aplicado a cada generación a través de la Eucaristía.

 📖 Escritura: Hebreos 7:24-25 — Cristo "siempre vive para interceder" como nuestro eterno Sumo Sacerdote. Apocalipsis 5:6 — en el cielo, Cristo aparece como "un Cordero, como inmolado."

 📜 Tradición: Justino Mártir (siglo II) llamó explícitamente a la Eucaristía un "sacrificio."

 💬 Responder: "La Misa no añade un nuevo sacrificio — es el mismo, hecho presente. Piensa en cómo la Pascua no era un nuevo éxodo sino una re-vivencia del original para cada generación."`,
    },
  },
  {
    keywords: [
      'once saved always saved', 'eternal security', 'lose salvation', 'can you lose salvation', 'assurance of salvation',
      'una vez salvo siempre salvo', 'minsan na naliligtas laging naliligtas',
      'uma vez salvo sempre salvo', 'une fois sauve toujours sauve', 'sekali diselamatkan selalu diselamatkan',
      'kausa naluwas pirmi naluwas', 'kaisa naluwas pirme naluwas',
    ],
    answers: {
      en: `⚡ Challenge: Once saved, always saved — a true Christian cannot lose their salvation.

 ✅ Answer: Catholics believe God's grace is sufficient to keep us, but Scripture clearly warns that we can fall away. Salvation is a process (justification, sanctification, glorification), not a one-time event. God's faithfulness is certain; our free response is not automatically guaranteed.

 📖 Scripture: Hebrews 6:4-6 — it is possible for those "who have once been enlightened" to fall away. 1 Corinthians 10:12 — "Let anyone who thinks he stands take heed lest he fall." Romans 11:22 — "provided you continue in his kindness, otherwise you also will be cut off."

 📜 Tradition: The early Church never taught "once saved always saved." The Council of Trent reaffirmed that while God's grace is utterly reliable, human free will can reject that grace.

 💬 Respond: "We can have great confidence in God's love and faithfulness. But Scripture warns us to persevere — not because God is unreliable, but because we must keep choosing to remain in Him."`,
      ceb: `⚡ Hangyo: Kausa naluwas, pirmi naluwas — ang tinuod nga Kristiyano dili mawad-an sa kaluwasan.

 ✅ Tubag: Nagtuo ang mga Katoliko nga ang grasya sa Dios igo aron bantayan kita, apan tin-aw nga nagpasidaan ang Kasulatan nga mahimo tang malaglag. Ang kaluwasan usa ka proseso (pagpakamatarong, pagbalaan, paggloripikar), dili usa ka higayon lamang.

 📖 Kasulatan: Mga Hebreohanon 6:4-6 — posible alang sa mga "kaniadto naliwanagan" nga malaglag. 1 Corinto 10:12 — "Ang naghunahuna nga nagtindog, magbantay aron dili mahulog." Roma 11:22 — "basta nagpadayon ka sa iyang kaayo, kay kon dili ikaw usab putlon."

 📜 Tradisyon: Ang unang Simbahan wala gitudloi ang "kausa naluwas, pirmi naluwas." Ang Konsilyo sa Trent nagpagkit pag-usab nga bisan ang grasya sa Dios hingpit nga masaligan, ang kagawasan sa tawo makabalibad niining grasya.

 💬 Tubag: "Mahimo kitang adunay dako nga pagsalig sa gugma ug katinuoray sa Dios. Apan nagpasidaan kanato ang Kasulatan nga magpadayon — dili tungod kay ang Dios dili masaligan, kondili tungod kay kinahanglan natong padayon nga mopili sa pag-ostensiya kaniya."`,
      fil: `⚡ Hamon: Minsan na naliligtas, laging naliligtas — ang isang tunay na Kristiyano ay hindi maaaring mawalan ng kaligtasan.

 ✅ Sagot: Naniniwala ang mga Katoliko na ang grasya ng Dios ay sapat upang mapanatili tayo, ngunit malinaw na binabalaan ng Kasulatan na maaari tayong lumayo. Ang kaligtasan ay isang proseso (pagaaringanap, pagpapabanal, pagluwalhati), hindi isang beses lamang na kaganapan.

 📖 Kasulatan: Mga Hebreo 6:4-6 — posible para sa mga "naliwanagan na" na malagpasan. 1 Corinto 10:12 — "Ang nag-iisip na nakatayo, mag-ingat na hindi siya mahulog." Roma 11:22 — "basta mananatili ka sa kanyang kabutihan, kung hindi ikaw rin ay puputulin."

 📜 Tradisyon: Ang unang Simbahan ay hindi nagturo ng "minsan na naliligtas, laging naliligtas." Ang Konsilyo ng Trent ay muling nagpapatibay na habang ang grasya ng Dios ay ganap na mapagkakatiwalaan, ang libreng kalooban ng tao ay maaaring tumanggi sa grasyang iyon.

 💬 Sagot: "Maaari tayong magkaroon ng malaking tiwala sa pagmamahal at katapatan ng Dios. Ngunit binabalaan tayo ng Kasulatan na magpatuloy — hindi dahil ang Dios ay hindi mapagkakatiwalaan, kundi dahil kailangan nating patuloy na piliin na manatili sa Kanya."`,
      es: `⚡ Desafío: Una vez salvo, siempre salvo — un verdadero cristiano no puede perder su salvación.

 ✅ Respuesta: Los católicos creemos que la gracia de Dios es suficiente para mantenernos, pero la Escritura claramente advierte que podemos apartarnos. La salvación es un proceso, no un evento único.

 📖 Escritura: Hebreos 6:4-6 — es posible que los que "fueron iluminados" se aparten. 1 Corintios 10:12 — "El que piensa que está firme, mire que no caiga." Romanos 11:22 — "con tal que permanezcas en su bondad, pues de otra manera tú también serás cortado."

 📜 Tradición: La Iglesia primitiva nunca enseñó "una vez salvo, siempre salvo." El Concilio de Trento reafirmó que aunque la gracia de Dios es completamente confiable, la libre voluntad humana puede rechazar esa gracia.

 💬 Responder: "Podemos tener gran confianza en el amor y la fidelidad de Dios. Pero la Escritura nos advierte que perseveremos."`,
    },
  },
  {
    keywords: [
      'sola fide', 'faith alone', 'faith alone saves', 'justified by faith alone',
      'solo la fe salva', 'pananampalataya lamang ang nagliligtas',
      'somente a fe salva', 'la foi seule sauve', 'iman saja yang menyelamatkan',
      'ang pagtuo lamang ang nakaluwas', 'pagtuo lamang nakaluwas',
      'ang pananampalataya lamang', 'pagtoo lamang',
    ],
    answers: {
      en: `⚡ Challenge: Faith alone saves (Sola Fide) — the Catholic view of works is unbiblical.

 ✅ Answer: The phrase "faith alone" appears only ONCE in the New Testament — in James 2:24, where it says we are justified "NOT by faith alone." Catholics do not teach that works earn salvation; we teach that saving faith is never alone — it always produces love and good works. Paul and James agree: Paul addresses initial justification, James addresses the ongoing proof of faith.

 📖 Scripture: James 2:24 — "A person is justified by works and not by faith alone." James 2:17 — "Faith without works is dead." Galatians 5:6 — "The only thing that counts is faith expressing itself through love."

 📜 Tradition: Augustine, Chrysostom, Aquinas — all taught that grace produces both faith and works as inseparable aspects of salvation.

 💬 Respond: "Catholics and Lutherans actually signed a Joint Declaration on Justification (1999) affirming agreement on the essentials. The real question is whether faith that saves is a living faith — and everyone agrees it is."`,
      ceb: `⚡ Hangyo: Ang pagtuo lamang ang nagluwas (Sola Fide) — ang panglantaw sa mga Katoliko bahin sa mga buhat dili biblikal.

 ✅ Tubag: Ang pariho nga "pagtuo lamang" makita KAUSA LAMANG sa Bag-ong Tipan — sa Santiago 2:24, diin giingon nga ang tawo gipakamatarong "DILI sa pagtuo lamang." Ang mga Katoliko wala nagtudlo nga ang mga buhat nakakuha sa kaluwasan; nagtudlo kami nga ang nagluluwas nga pagtuo dili gyud mag-inusara — kini kanunay nagbunga sa gugma ug maayong mga buhat.

 📖 Kasulatan: Santiago 2:24 — "Ang tawo gipakamatarong sa mga buhat ug dili sa pagtuo lamang." Santiago 2:17 — "Ang pagtuo nga walay mga buhat patay."

 📜 Tradisyon: Santi Agustin, Chrysostom, Tomas de Aquino — silang tanan nagtudlo nga ang grasya nagbunga og pagtuo ug mga buhat isip dili mabubulag nga aspeto sa kaluwasan.

 💬 Tubag: "Ang mga Katoliko ug mga Luterano nakapirma sa usa ka Joint Declaration on Justification (1999) nga nagpapatunhay sa kasabutan sa mga esensyal."`,
      fil: `⚡ Hamon: Ang pananampalataya lamang ang nagliligtas (Sola Fide) — ang pananaw ng mga Katoliko tungkol sa mga gawa ay hindi biblikal.

 ✅ Sagot: Ang pariralang "pananampalataya lamang" ay lilitaw ISANG BESES LAMANG sa Bagong Tipan — sa Santiago 2:24, kung saan sinasabi na ang tao ay inaaringganap "HINDI ng pananampalataya lamang." Ang mga Katoliko ay hindi nagtuturo na ang mga gawa ay kumukuha ng kaligtasan; nagtuturo kami na ang nagliligtas na pananampalataya ay hindi kailanman nag-iisa — lagi itong nagbubunga ng pagmamahal at mabuting mga gawa.

 📖 Kasulatan: Santiago 2:24 — "Isang tao ay inaaringganap ng mga gawa at hindi ng pananampalataya lamang." Santiago 2:17 — "Ang pananampalataya na walang mga gawa ay patay."

 📜 Tradisyon: Si Agustin, Chrysostom, Aquino — lahat ay nagturo na ang grasya ay nagbubunga ng parehong pananampalataya at mga gawa bilang hindi mapaghihiwalay na mga aspeto ng kaligtasan.

 💬 Sagot: "Ang mga Katoliko at mga Luterano ay nakapirma ng isang Joint Declaration on Justification (1999) na nagpapatibay ng kasunduan sa mga esensyal."`,
      es: `⚡ Desafío: Solo la fe salva (Sola Fide) — la visión católica de las obras no es bíblica.

 ✅ Respuesta: La frase "solo la fe" aparece solo UNA VEZ en el Nuevo Testamento — en Santiago 2:24, donde dice que el hombre es justificado "NO por la fe sola." Los católicos no enseñamos que las obras ganan la salvación; enseñamos que la fe salvadora nunca está sola — siempre produce amor y buenas obras.

 📖 Escritura: Santiago 2:24 — "El hombre es justificado por las obras, y no solamente por la fe." Santiago 2:17 — "La fe sin obras está muerta."

 📜 Tradición: Agustín, Crisóstomo, Tomás de Aquino — todos enseñaron que la gracia produce tanto la fe como las obras como aspectos inseparables de la salvación.

 💬 Responder: "Los católicos y los luteranos firmaron una Declaración Conjunta sobre la Justificación (1999) que afirma el acuerdo en los puntos esenciales."`,
    },
  },
  {
    keywords: [
      'sola scriptura', 'bible alone', 'scripture alone', 'bible only', 'tradition not in bible',
      'solo la biblia es suficiente', 'bibliya lamang ang sapat',
      'somente a biblia', 'la bible seule suffit', 'alkitab saja sudah cukup',
      'ang bibliya lamang ang igo', 'bibliya lamang ang igo', 'ang bibliya lamang ang sapat',
    ],
    answers: {
      en: `⚡ Challenge: The Bible alone is sufficient (Sola Scriptura) — Catholic Tradition is man-made addition.

 ✅ Answer: Sola Scriptura is itself not found in Scripture and was unknown before the 16th century. The Bible itself points to the Church and Tradition as authoritative (1 Tim 3:15 calls the Church the "pillar of truth"). Without Sacred Tradition, we wouldn't even know which books belong in the Bible — the canon was defined by the Church, not Scripture itself.

 📖 Scripture: 2 Thessalonians 2:15 — "Stand firm and hold to the traditions… whether by word or by letter." 1 Timothy 3:15 — "The church of the living God is the pillar and foundation of the truth." John 21:25 — "Jesus did many other things… which are not written in this book."

 📜 Tradition: The very canon of Scripture was defined by Catholic councils (Hippo 393, Carthage 397). The early Church operated for decades before any NT books were written — and centuries before the canon was complete.

 💬 Respond: "The irony of Sola Scriptura is that you can't find it in Scripture. The Bible itself assumes a living Church and living Tradition to interpret and transmit the faith faithfully."`,
      ceb: `⚡ Hangyo: Ang Bibliya lamang ang igo (Sola Scriptura) — ang Tradisyon sa mga Katoliko dugang sa tawo.

 ✅ Tubag: Ang Sola Scriptura mismo wala makita sa Kasulatan ug wala nailhan sa wala pa ang ika-16 ka siglo. Ang Bibliya mismo nagpunting sa Simbahan ug Tradisyon isip awtoritatibo (1 Tim 3:15 nagtawag sa Simbahan nga "haligi sa kamatuoran"). Kung wala ang Sagradong Tradisyon, wala pa unta natong mahibaloan kung unsang mga libro ang sakop sa Bibliya — ang canon gihubit sa Simbahan, dili sa Kasulatan mismo.

 📖 Kasulatan: 2 Tesalonica 2:15 — "Pabilin ug tipigi ang mga tradisyon... bisag pinaagi sa pulong o sulat." 1 Timoteo 3:15 — "Ang simbahan sa buhi nga Dios haligi ug sukaranan sa kamatuoran."

 📜 Tradisyon: Ang canon sa Kasulatan gihubit sa mga Konsilyo sa mga Katoliko (Hippo 393, Carthage 397).

 💬 Tubag: "Ang ironia sa Sola Scriptura mao nga dili nimo makit-an kini sa Kasulatan. Ang Bibliya mismo nagahunahuna og usa ka buhi nga Simbahan ug buhi nga Tradisyon aron interpretahon ug ipasa ang pagtuo sa katapusang paagi."`,
      fil: `⚡ Hamon: Ang Bibliya lamang ang sapat (Sola Scriptura) — ang Tradisyon ng mga Katoliko ay dagdag ng tao.

 ✅ Sagot: Ang Sola Scriptura mismo ay hindi makikita sa Kasulatan at hindi kilala bago ang ika-16 na siglo. Ang Bibliya mismo ay nagpapakita sa Simbahan at Tradisyon bilang may awtoridad (1 Tim 3:15 ang tinatawag na Simbahan na "haligi ng katotohanan"). Kung wala ang Sagradong Tradisyon, hindi pa natin malalaman kung aling mga libro ang kabilang sa Bibliya — ang kanon ay itinakda ng Simbahan, hindi ng Kasulatan mismo.

 📖 Kasulatan: 2 Tesalonica 2:15 — "Manatag kayo at panghawakan ang mga tradisyon... maging sa pamamagitan ng salita o sulat." 1 Timoteo 3:15 — "Ang simbahan ng buhay na Dios ay haligi at saligan ng katotohanan."

 📜 Tradisyon: Ang kanon ng Kasulatan ay itinakda ng mga Konsilyo ng mga Katoliko (Hippo 393, Kartago 397).

 💬 Sagot: "Ang kabalintunaan ng Sola Scriptura ay hindi mo makikita ito sa Kasulatan. Ipinapalagay mismo ng Bibliya ang isang buhay na Simbahan at buhay na Tradisyon upang bigyang-kahulugan at ipasa ang pananampalataya nang tapat."`,
      es: `⚡ Desafío: Solo la Biblia es suficiente (Sola Scriptura) — la Tradición católica es adición humana.

 ✅ Respuesta: La Sola Scriptura en sí no se encuentra en las Escrituras y era desconocida antes del siglo XVI. La propia Biblia señala a la Iglesia y la Tradición como autoritativas (1 Tim 3:15 llama a la Iglesia "columna de la verdad"). Sin la Tradición Sagrada, ni siquiera sabríamos qué libros pertenecen a la Biblia — el canon fue definido por la Iglesia, no por las Escrituras mismas.

 📖 Escritura: 2 Tesalonicenses 2:15 — "Manteneos firmes y retened las tradiciones... ya sea de palabra o por carta." 1 Timoteo 3:15 — "La iglesia del Dios viviente es columna y fundamento de la verdad."

 📜 Tradición: El mismo canon de las Escrituras fue definido por concilios católicos (Hipona 393, Cartago 397).

 💬 Responder: "La ironía de la Sola Scriptura es que no puedes encontrarla en las Escrituras. La propia Biblia asume una Iglesia viva y una Tradición viva para interpretar y transmitir la fe fielmente."`,
    },
  },
];

// Simple keyword-matching search
/**
 * Find the best offline answer for a user query.
 * @param {string} query - the user's message
 * @param {string} langCode - language code (e.g. 'ceb', 'fil', 'es', 'en')
 * @returns {string|null} formatted answer string in the requested language, or null if no match
 */
export function findOfflineAnswer(query, langCode) {
  if (!query) return null
  const q = query.toLowerCase()

  for (const entry of KB) {
    for (const kw of entry.keywords) {
      if (q.includes(kw)) {
        return entry.answers[langCode] || entry.answers.en
      }
    }
  }

  // Fallback: partial word match (any keyword word > 4 chars appears in query)
  for (const entry of KB) {
    for (const kw of entry.keywords) {
      const words = kw.split(' ')
      if (words.some((w) => w.length > 4 && q.includes(w))) {
        return entry.answers[langCode] || entry.answers.en
      }
    }
  }

  return null
}
