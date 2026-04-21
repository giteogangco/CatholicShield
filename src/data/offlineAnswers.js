/**
 * offlineAnswers.js
 * Local Catholic apologetics knowledge base.
 * No API key required — works fully offline.
 *
 * findOfflineAnswer(query, langCode) returns a formatted string
 * using the same emoji markers (⚡ ✅ 📖 📜 💬) as the online mode,
 * or null if no match is found.
 */

// ── Knowledge base ────────────────────────────────────────────
// Each entry has:
//   keywords: string[] — matched against user query (lowercase)
//   answer:   string   — English answer (default)
//   answers:  object   — per-language answers (optional override)
const KB = [
  {
        keywords: [
                // English
          'worship mary', 'worshipping mary', 'worship the virgin', 'mary worship',
                // Filipino
                'sinasamba', 'nagdarasal kay maria', 'sumamba kay maria',
                // Spanish
                'adoran a maría', 'adoran a maria', 'veneran a maría',
                // Portuguese
                'adoram maria', 'veneram maria',
                // French
                'adorent marie', 'vénèrent marie',
                // Italian
                'adorano maria', 'venerano maria',
                // Indonesian
                'menyembah maria',
                // Korean (romanized)
                '마리아를 숭배',
                // Other PH
                'gisimba si maria', 'ginasimba si maria',
              ],
        answer: `⚡ Challenge: Catholics worship Mary just like they worship God.

          ✅ Answer: Catholics do NOT worship Mary. We honor (venerate) her as the greatest of all saints and the Mother of God, but worship (latria) is given to God alone. Honoring Mary is no different from honoring a great hero — it does not replace God. Mary always points us to her Son, Jesus.

            📖 Scripture: Luke 1:48 — "All generations will call me blessed." John 2:5 — Mary says, "Do whatever he tells you," directing all attention to Jesus.

              📜 Tradition: The Council of Ephesus (431 AD) declared Mary Theotokos (God-bearer) to honor Christ's divine nature, not to elevate Mary above God. St. Augustine and all early Fathers distinguished latria (worship of God) from dulia/hyperdulia (honor of saints).

                💬 Respond: "We honor Mary the way we honor a great mother — with love and respect. She is not a goddess; she is our intercessor who leads us closer to Jesus."`,
        answers: {
                es: `⚡ Objeción: Los católicos adoran a María igual que a Dios.

                  ✅ Respuesta: Los católicos NO adoran a María. La honramos (veneramos) como la más grande de los santos y Madre de Dios, pero la adoración (latría) se da solo a Dios. Honrar a María no es diferente a honrar a una gran madre — no reemplaza a Dios. María siempre nos señala a su Hijo, Jesús.

                    📖 Escritura: Lucas 1:48 — "Todas las generaciones me llamarán bienaventurada." Juan 2:5 — María dice: "Haced lo que él os diga", dirigiendo toda la atención a Jesús.

                      📜 Tradición: El Concilio de Éfeso (431 d.C.) declaró a María Theotokos (Madre de Dios) para honrar la naturaleza divina de Cristo, no para elevar a María por encima de Dios. San Agustín y todos los Padres distinguían la latría (adoración a Dios) de la dulía/hiperdulía (honor a los santos).

                        💬 Responde: "Honramos a María como honraríamos a una gran madre — con amor y respeto. No es una diosa; es nuestra intercesora que nos acerca más a Jesús."`,
                pt: `⚡ Objeção: Os católicos adoram Maria assim como adoram a Deus.

                  ✅ Resposta: Os católicos NÃO adoram Maria. Nós a honramos (veneramos) como a maior de todos os santos e Mãe de Deus, mas a adoração (látria) é dada somente a Deus. Honrar Maria não é diferente de honrar uma grande mãe — não substitui a Deus. Maria sempre nos aponta para seu Filho, Jesus.

                    📖 Escritura: Lucas 1:48 — "Todas as gerações me chamarão bem-aventurada." João 2:5 — Maria diz: "Fazei o que ele vos disser", direcionando toda atenção a Jesus.

                      📜 Tradição: O Concílio de Éfeso (431 d.C.) declarou Maria Theotokos (Mãe de Deus) para honrar a natureza divina de Cristo. Santo Agostinho distinguia a látria (adoração a Deus) da dulia/hiperdúlia (honra aos santos).

                        💬 Responda: "Honramos Maria como honraríamos uma grande mãe — com amor e respeito. Ela não é uma deusa; é nossa intercessora que nos aproxima de Jesus."`,
                fil: `⚡ Hamon: Sinasamba ng mga Katoliko si Maria tulad ng pagsamba sa Diyos.

                  ✅ Sagot: HINDI sinasamba ng mga Katoliko si Maria. Ginagalang namin siya bilang pinakadakilang santo at Ina ng Diyos, ngunit ang pagsamba (latria) ay para sa Diyos lamang. Ang paggalang kay Maria ay katulad ng paggalang sa isang dakilang ina — hindi ito pumapalit sa Diyos. Lagi siyang nagtuturo sa kanyang Anak, si Jesus.

                    📖 Kasulatan: Lucas 1:48 — "Pagpapalain ako ng lahat ng salinlahi." Juan 2:5 — Sinabi ni Maria: "Gawin ninyo ang lahat ng sasabihin niya," na itinuturo lahat ng pansin kay Jesus.

                      📜 Tradisyon: Ang Konsilyo ng Efeso (431 AD) ay nagdeklara kay Maria bilang Theotokos (Ina ng Diyos) upang parangalan ang kalikasang banal ni Kristo, hindi upang itaas si Maria nang higit sa Diyos.

                        💬 Tugon: "Ginagalang namin si Maria tulad ng paggalang sa isang dakilang ina — may pagmamahal at paggalang. Hindi siya isang diyosa; siya ang ating tagapamagitan na nagdadala sa atin kay Jesus."`,
        },
  },
  {
        keywords: [
                'pray to saints', 'praying to saints', 'saints intercession', 'dead saints', 'saints are dead',
                // Spanish
                'rezar a los santos', 'orar a los santos', 'intercesión de los santos',
                // Portuguese
                'rezar aos santos', 'orar aos santos',
                // French
                'prier les saints', 'intercession des saints',
                // Italian
                'pregare i santi',
                // Filipino
                'manalangin sa mga santo', 'dalangin sa mga santo',
                // Indonesian
                'berdoa kepada orang kudus',
              ],
        answer: `⚡ Challenge: Praying to saints is wrong because they are dead and only God hears prayers.

          ✅ Answer: Catholics ask saints to intercede for us — just as we ask a living friend to pray for us. Saints are not dead; they are alive in Christ (Luke 20:38). Asking a saint to pray is no different from asking a brother or sister in church to pray for you, except saints are even closer to God.

            📖 Scripture: Revelation 5:8 — the elders in heaven offer "golden bowls full of incense, which are the prayers of God's people." Revelation 8:3-4 — an angel offers the prayers of the saints before God. James 5:16 — "The prayer of a righteous person is powerful and effective."

              📜 Tradition: Origen (3rd century) and all early Christians prayed for the intercession of martyrs. The Catacomb inscriptions show Christians asking Peter, Paul, and Mary to intercede.

                💬 Respond: "We don't pray TO saints the way we pray TO God. We ask them to pray FOR us, trusting they are alive with Christ and hear our requests through Him."`,
        answers: {
                es: `⚡ Objeción: Rezar a los santos está mal porque están muertos y solo Dios escucha las oraciones.

                  ✅ Respuesta: Los católicos pedimos a los santos que intercedan por nosotros — igual que pedimos a un amigo vivo que ore por nosotros. Los santos no están muertos; están vivos en Cristo (Lucas 20:38). Pedir a un santo que ore no es diferente a pedir a un hermano en la iglesia que ore por ti, salvo que los santos están aún más cerca de Dios.

                    📖 Escritura: Apocalipsis 5:8 — los ancianos en el cielo ofrecen "copas de oro llenas de incienso, que son las oraciones de los santos." Santiago 5:16 — "La oración del justo es poderosa y eficaz."

                      📜 Tradición: Orígenes (siglo III) y todos los primeros cristianos oraban pidiendo la intercesión de los mártires. Las inscripciones de las catacumbas muestran a los cristianos pidiendo a Pedro, Pablo y María que intercedan.

                        💬 Responde: "No oramos A los santos como oramos A Dios. Les pedimos que oren POR nosotros, confiando en que están vivos en Cristo."`,
                fil: `⚡ Hamon: Mali ang manalangin sa mga santo dahil patay na sila at ang Diyos lamang ang nakikinig.

                  ✅ Sagot: Hinihiling ng mga Katoliko sa mga santo na mamagitan para sa atin — tulad ng paghiling sa isang kaibigan na ipanalangin tayo. Ang mga santo ay hindi patay; nabubuhay sila kay Kristo (Lucas 20:38).

                    📖 Kasulatan: Apocalipsis 5:8 — ang mga matatanda sa langit ay nag-aalok ng "gintong mangkok na puno ng kamangyan, na siyang mga panalangin ng mga tao ng Diyos." Santiago 5:16 — "Ang panalangin ng taong matuwid ay may kapangyarihan at epekto."

                      💬 Tugon: "Hindi kami nananalangin SA mga santo tulad ng aming panalangin SA Diyos. Hinihiling namin sa kanila na ipanalangin tayo, nagtitiwala na nabubuhay sila kay Kristo."`,
        },
  },
  {
        keywords: [
                'pope infallible', 'pope not infallible', 'papal infallibility', 'pope wrong',
                // Spanish
                'papa infalible', 'papa no es infalible', 'infalibilidad papal',
                // Portuguese
                'papa infalível', 'papa não é infalível',
                // French
                'pape infaillible', 'infaillibilité papale',
                // Italian
                'papa infallibile',
                // Filipino
                'infallible ang papa', 'hindi infallible ang papa',
                // Indonesian
                'paus infallible', 'paus tidak infallible',
              ],
        answer: `⚡ Challenge: The Pope is not infallible — he is just a man and can make mistakes.

          ✅ Answer: Papal infallibility is very limited. It applies ONLY when the Pope speaks ex cathedra (from the chair) on matters of faith and morals for the whole Church. It has been formally invoked only twice in modern history (1854 and 1950). It does not mean every word the Pope says is perfect — only specific, solemn, official definitions are covered.

            📖 Scripture: Matthew 16:18-19 — "You are Peter, and on this rock I will build my church… I will give you the keys of the kingdom of heaven." Luke 22:32 — Jesus prays that Peter's faith "may not fail" so he can strengthen his brothers.

              📜 Tradition: Vatican I (1870) formally defined papal infallibility with very strict conditions. The early Church consistently looked to Rome for final resolution of doctrinal disputes (Irenaeus, Cyprian, Augustine).

                💬 Respond: "Infallibility is much narrower than most people think. It's about protecting the Church from official error in doctrine — not claiming the Pope is sinless or always wise in every area."`,
        answers: {
                es: `⚡ Objeción: El Papa no es infalible — es solo un hombre y puede cometer errores.

                  ✅ Respuesta: La infalibilidad papal es muy limitada. Se aplica SOLO cuando el Papa habla ex cátedra sobre asuntos de fe y moral para toda la Iglesia. Solo se ha invocado formalmente dos veces en la historia moderna (1854 y 1950).

                    📖 Escritura: Mateo 16:18-19 — "Tú eres Pedro, y sobre esta roca edificaré mi iglesia… Te daré las llaves del reino de los cielos." Lucas 22:32 — Jesús ora para que la fe de Pedro "no desfallezca".

                      📜 Tradición: El Vaticano I (1870) definió formalmente la infalibilidad papal con condiciones muy estrictas.

                        💬 Responde: "La infalibilidad es mucho más limitada de lo que la mayoría piensa. Se trata de proteger a la Iglesia del error oficial en doctrina, no de afirmar que el Papa es perfecto."`,
        },
  },
  {
        keywords: [
                'purgatory bible', 'purgatory not in bible', 'purgatory scripture', 'purgatory unbiblical',
                // Spanish
                'purgatorio biblia', 'purgatorio no está en la biblia',
                // Portuguese
                'purgatório bíblia', 'purgatório não está na bíblia',
                // French
                'purgatoire bible', 'purgatoire pas dans la bible',
                // Italian
                'purgatorio bibbia',
                // Filipino
                'purgatoryo bibliya', 'purgatoryo wala sa bibliya',
                // Indonesian
                'api penyucian alkitab',
              ],
        answer: `⚡ Challenge: Purgatory is not in the Bible — it was invented by the Catholic Church.

          ✅ Answer: While the word "purgatory" isn't in the Bible, the concept clearly is. Scripture teaches a purification after death for those who are not perfectly holy, and prayers for the dead have been part of God's people from ancient times.

            📖 Scripture: 2 Maccabees 12:46 — "It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins." 1 Corinthians 3:15 — "He himself will be saved, but only as through fire." Matthew 12:32 — sins forgiven "neither in this age nor in the age to come" implies some process beyond death.

              📜 Tradition: The early Church prayed for the dead as far back as the 2nd century (Tertullian, Origen). Inscriptions in the Roman catacombs from the 1st–3rd centuries ask for mercy on the souls of the departed.

                💬 Respond: "Purgatory is simply the teaching that God's love purifies us completely before we see Him. Even many Protestants believe in a purification process — they just may call it something different."`,
  },
  {
        keywords: [
                'added books', 'deuterocanon', 'apocrypha', 'extra books bible', 'catholic bible books', 'removed books',
                // Spanish
                'añadieron libros', 'libros deuterocanónicos', 'apócrifos biblia',
                // Portuguese
                'acrescentaram livros', 'livros deuterocanônicos',
                // French
                'ajouté des livres', 'livres deutérocanoniques',
                // Filipino
                'nagdagdag ng libro', 'nagdagdag ng libro sa bibliya',
                // Indonesian
                'menambah kitab',
              ],
        answer: `⚡ Challenge: Catholics added books to the Bible (the Apocrypha/Deuterocanon).

          ✅ Answer: Catholics did not ADD books — Protestants REMOVED them during the Reformation. The 7 deuterocanonical books (Tobit, Judith, 1 & 2 Maccabees, Sirach, Wisdom, Baruch) were in the Septuagint (Greek OT) used by Jesus and the Apostles, and in the Christian Bible for 1,500 years before Luther removed them in the 1500s.

            📖 Scripture: The New Testament quotes the Septuagint (which includes these books) hundreds of times. Hebrews 11:35 alludes to 2 Maccabees 7.

              📜 Tradition: The Council of Hippo (393 AD) and Council of Carthage (397 AD) canonized the 46-book Old Testament used by Catholics. This was the universal Christian canon for over a millennium before the Reformation.

                💬 Respond: "The question isn't whether Catholics added books, but why Luther removed books that the Church had used for 1,500 years. The historical evidence is on the Catholic side."`,
  },
  {
        keywords: [
                'confession priest', 'confess priest', 'confession unbiblical', 'why confess priest', 'priest forgive sins',
                // Spanish
                'confesarse con un sacerdote', 'confesión al sacerdote', 'confesión no es bíblica',
                // Portuguese
                'confissão ao padre', 'confessar ao padre',
                // French
                'confession au prêtre', 'confesser au prêtre',
                // Filipino
                'kumumpsal sa pari', 'kumpisal sa pari',
                // Indonesian
                'pengakuan dosa kepada imam',
              ],
        answer: `⚡ Challenge: Confessing to a priest is unbiblical — we should confess only to God.

          ✅ Answer: Jesus gave the Apostles — and through them, their successors — the authority to forgive sins. Confession to a priest is not instead of God forgiving; it IS God forgiving, through the ministry He established. The priest acts in persona Christi (in the person of Christ).

            📖 Scripture: John 20:22-23 — Jesus breathes on the Apostles and says, "Receive the Holy Spirit. If you forgive anyone's sins, their sins are forgiven; if you do not forgive them, they are not forgiven." James 5:16 — "Confess your sins to each other." 2 Corinthians 5:18 — God gave us the "ministry of reconciliation."

              📜 Tradition: Confession to a bishop or priest is documented from the earliest Christian writings (Didache, St. Ignatius of Antioch, Tertullian). It has never been a Catholic invention — it was the universal practice of the early Church.

                💬 Respond: "Jesus clearly gave the Apostles the power to forgive or retain sins — that power had to go somewhere! Catholics believe it was passed on through apostolic succession to priests today."`,
        answers: {
                es: `⚡ Objeción: Confesarse con un sacerdote no es bíblico — debemos confesar solo a Dios.

                  ✅ Respuesta: Jesús dio a los Apóstoles — y a través de ellos, a sus sucesores — la autoridad para perdonar los pecados. La confesión a un sacerdote no reemplaza el perdón de Dios; ES Dios perdonando, a través del ministerio que Él estableció.

                    📖 Escritura: Juan 20:22-23 — Jesús sopla sobre los Apóstoles y dice: "Reciban el Espíritu Santo. A quienes les perdonen los pecados, les serán perdonados."

                      📜 Tradición: La confesión a un obispo o sacerdote está documentada desde los primeros escritos cristianos (Didajé, San Ignacio de Antioquía, Tertuliano).

                        💬 Responde: "Jesús claramente dio a los Apóstoles el poder de perdonar o retener los pecados. Los católicos creen que ese poder se transmitió por sucesión apostólica a los sacerdotes de hoy."`,
        },
  },
  {
        keywords: [
                'catholics not saved', 'catholics unsaved', 'are catholics christian', 'catholics going to hell',
                // Spanish
                'católicos no están salvados', 'católicos no son salvos',
                // Portuguese
                'católicos não estão salvos',
                // French
                'catholiques ne sont pas sauvés',
                // Filipino
                'hindi naliligtas ang mga katoliko',
                // Indonesian
                'umat katolik tidak diselamatkan',
              ],
        answer: `⚡ Challenge: Catholics are not saved because they add works to faith.

          ✅ Answer: Catholics believe salvation is entirely a gift of God's grace — we cannot earn it. However, Scripture teaches that genuine faith naturally produces works, and that we must cooperate with God's grace. The Catholic view is not "faith + works = salvation" but rather "saving faith is a living faith that works through love."

            📖 Scripture: Ephesians 2:8-10 — "By grace you have been saved through faith… not of works… For we are God's handiwork, created in Christ Jesus to do good works." James 2:24 — "A person is justified by works and not by faith alone." Matthew 25:31-46 — Final judgment involves how we treated the hungry, sick, and stranger.

              📜 Tradition: The Council of Trent (1547) affirmed that justification is by grace alone, received through faith, and that it bears fruit in good works — not that works earn salvation.

                💬 Respond: "Catholics and many Protestants actually agree that true saving faith transforms a person's life. The difference is often more about terminology than substance — we all agree that grace, not human effort, is the source of salvation."`,
  },
  {
        keywords: [
                'statues idolatry', 'images idolatry', 'graven images', 'catholic idols', 'worship statues',
                // Spanish
                'estatuas idolatría', 'imágenes idolatría', 'ídolos católicos',
                // Portuguese
                'estátuas idolatria', 'imagens idolatria',
                // French
                'statues idolâtrie', 'images idolâtrie',
                // Filipino
                'idolatriya ang mga rebulto', 'imahen idolatriya', 'mga rebulto ay idolatriya',
                // Indonesian
                'patung penyembahan berhala',
              ],
        answer: `⚡ Challenge: Catholic statues and images are idolatry, forbidden by God.

          ✅ Answer: God forbids worshipping idols — making a statue or image of something and treating it as a god. He does NOT forbid all images; in fact, He commanded images in the Temple (bronze serpent, cherubim on the Ark). Catholics do not worship statues; they use them as visual reminders of holy people, just like a photo of a loved one.

            📖 Scripture: Numbers 21:8-9 — God commands Moses to make a bronze serpent as a means of healing. Exodus 25:18 — God commands golden cherubim on the Ark of the Covenant. The commandment (Exodus 20:4-5) forbids making idols TO WORSHIP, not all artistic representations.

              📜 Tradition: The Second Council of Nicaea (787 AD) defined the distinction between latria (worship, due to God alone) and proskynesis/veneration (honor shown to images). Icons and sacred art have been part of Christian worship since the earliest centuries.

                💬 Respond: "The issue isn't the statue — it's what you do with it. Catholics venerate (honor) what the image represents; they don't worship the material object. Every Protestant church has a cross — that's also an image."`,
        answers: {
                es: `⚡ Objeción: Las estatuas e imágenes católicas son idolatría, prohibidas por Dios.

                  ✅ Respuesta: Dios prohíbe adorar ídolos — hacer una estatua y tratarla como un dios. Pero NO prohíbe todas las imágenes; de hecho, ordenó imágenes en el Templo (serpiente de bronce, querubines en el Arca). Los católicos no adoran las estatuas; las usan como recordatorios visuales de personas santas.

                    📖 Escritura: Números 21:8-9 — Dios ordena a Moisés hacer una serpiente de bronce. Éxodo 25:18 — Dios ordena querubines de oro en el Arca. El mandamiento (Éxodo 20:4-5) prohíbe hacer ídolos PARA ADORAR, no todas las representaciones artísticas.

                      💬 Responde: "El problema no es la estatua — es lo que haces con ella. Los católicos veneran (honran) lo que representa la imagen; no adoran el objeto material."`,
        },
  },
  {
        keywords: [
                'mass sacrifice', 'mass not sacrifice', 'eucharist sacrifice', 'once for all sacrifice', 'mass re-sacrifice',
                // Spanish
                'misa no es sacrificio', 'misa sacrificio',
                // Portuguese
                'missa não é sacrifício', 'missa sacrifício',
                // French
                'messe pas un sacrifice', 'messe sacrifice',
                // Filipino
                'misa ay hindi sakripisyo', 'misa hindi sakripisyo',
                // Indonesian
                'misa bukan pengorbanan',
              ],
        answer: `⚡ Challenge: The Mass is not a sacrifice — Christ died once for all.

          ✅ Answer: Catholics agree Christ died ONCE for all (Hebrews 10:10). The Mass does not re-crucify Christ; it makes the ONE sacrifice of Calvary sacramentally present. It is the same sacrifice, offered once in history but applied to each generation through the Eucharist — like a window into the eternal offering before God's throne.

            📖 Scripture: Hebrews 7:24-25 — Christ "always lives to intercede" as our eternal High Priest. Revelation 5:6 — in heaven, Christ appears as "a Lamb, looking as if it had been slain." Malachi 1:11 — prophecy of a "pure offering" in every place. 1 Corinthians 10:16 — "The cup of blessing… is it not a participation in the blood of Christ?"

              📜 Tradition: Justin Martyr (2nd century) explicitly called the Eucharist a "sacrifice" and connected it to Malachi's prophecy. All early Church Fathers — Ignatius, Cyprian, Irenaeus — spoke of the Eucharist as the Church's sacrifice.

                💬 Respond: "The Mass isn't adding a new sacrifice — it's the same one, made present. Think of it like how Passover wasn't a new exodus but a re-living of the original one for each generation of Israel."`,
  },
  {
        keywords: [
                'once saved always saved', 'eternal security', 'lose salvation', 'can you lose salvation', 'assurance of salvation',
                // Spanish
                'una vez salvo siempre salvo', 'seguridad eterna', 'perder la salvación',
                // Portuguese
                'uma vez salvo sempre salvo', 'segurança eterna',
                // French
                'une fois sauvé toujours sauvé', 'sécurité éternelle',
                // Filipino
                'minsan na naliligtas laging naliligtas', 'kausa naluwas pirmi naluwas',
                // Indonesian
                'sekali diselamatkan selalu diselamatkan',
              ],
        answer: `⚡ Challenge: Once saved, always saved — a true Christian cannot lose their salvation.

          ✅ Answer: Catholics believe God's grace is sufficient to keep us, but Scripture clearly warns that we can fall away. Salvation is a process (justification → sanctification → glorification), not a one-time event. God's faithfulness is certain; our free response is not automatically guaranteed.

            📖 Scripture: Hebrews 6:4-6 — it is possible for those "who have once been enlightened… who have tasted the heavenly gift" to fall away. 1 Corinthians 10:12 — "Let anyone who thinks he stands take heed lest he fall." Romans 11:22 — "Consider the kindness and sternness of God… provided you continue in his kindness, otherwise you also will be cut off." Philippians 2:12 — "Work out your salvation with fear and trembling."

              📜 Tradition: The early Church never taught "once saved always saved." The Council of Trent (and later Vatican II) reaffirmed that while God's grace is utterly reliable, human free will can reject that grace.

                💬 Respond: "We can have great confidence in God's love and faithfulness. But Scripture warns us to persevere — not because God is unreliable, but because we must keep choosing to remain in Him."`,
  },
  {
        keywords: [
                'sola fide', 'faith alone', 'faith alone saves', 'justified by faith alone',
                // Spanish
                'fe sola', 'solo la fe salva', 'justificado por la fe sola',
                // Portuguese
                'somente a fé', 'somente a fé salva',
                // French
                'foi seule', 'la foi seule sauve',
                // Filipino
                'pananampalataya lamang ang nagliligtas', 'sola fide',
                // Indonesian
                'iman saja yang menyelamatkan',
              ],
        answer: `⚡ Challenge: Faith alone saves (Sola Fide) — the Catholic view of works is unbiblical.

          ✅ Answer: The phrase "faith alone" appears only ONCE in the New Testament — in James 2:24, where it says we are justified "NOT by faith alone." Catholics do not teach that works earn salvation; we teach that saving faith is never alone — it always produces love and good works. Paul and James agree: Paul addresses initial justification, James addresses the ongoing proof of faith.

            📖 Scripture: James 2:24 — "A person is justified by works and not by faith alone." James 2:17 — "Faith without works is dead." Galatians 5:6 — "The only thing that counts is faith expressing itself through love." Matthew 7:21 — "Not everyone who says to me 'Lord, Lord' will enter the kingdom."

              📜 Tradition: Augustine, Chrysostom, Aquinas — all taught that grace produces both faith and works as inseparable aspects of salvation. The Reformation-era division over this phrase obscures significant common ground.

                💬 Respond: "Catholics and Lutherans actually signed a Joint Declaration on Justification (1999) affirming agreement on the essentials. The real question is whether faith that saves is a living faith — and everyone agrees it is."`,
  },
  {
        keywords: [
                'sola scriptura', 'bible alone', 'scripture alone', 'bible only', 'tradition not in bible',
                // Spanish
                'sola escritura', 'solo la biblia', 'solo la biblia es suficiente',
                // Portuguese
                'somente a bíblia', 'somente a escritura',
                // French
                'bible seule', 'la bible seule suffit',
                // Filipino
                'bibliya lamang ang sapat', 'sola scriptura',
                // Indonesian
                'alkitab saja sudah cukup',
              ],
        answer: `⚡ Challenge: The Bible alone is sufficient (Sola Scriptura) — Catholic Tradition is man-made addition.

          ✅ Answer: Sola Scriptura is itself not found in Scripture and was unknown before the 16th century. The Bible itself points to the Church and Tradition as authoritative (1 Tim 3:15 calls the Church the "pillar of truth"). Without Sacred Tradition, we wouldn't even know which books belong in the Bible — the canon was defined by the Church, not Scripture itself.

            📖 Scripture: 2 Thessalonians 2:15 — "Stand firm and hold to the traditions… whether by word or by letter." 1 Timothy 3:15 — "The church of the living God [is] the pillar and foundation of the truth." John 21:25 — "Jesus did many other things… which are not written in this book." 2 Peter 3:16 — Scripture is "hard to understand" and can be "distorted by the ignorant."

              📜 Tradition: The very canon of Scripture was defined by Catholic councils (Hippo 393, Carthage 397). The early Church operated for decades before any NT books were written — and centuries before the canon was complete. Origen, Basil, and all Fathers treated Tradition and Scripture as complementary authorities.

                💬 Respond: "The irony of Sola Scriptura is that you can't find it in Scripture. The Bible itself assumes a living Church and living Tradition to interpret and transmit the faith faithfully."`,
  },
  ]

// ── Search function ──────────────────────────────────────────
/**
 * Find the best offline answer for a user query.
 * @param {string} query - the user's message
 * @param {string} langCode - language code
 * @returns {string|null} formatted answer string, or null if no match
 */
export function findOfflineAnswer(query, langCode) {
    if (!query) return null
    const q = query.toLowerCase()

  for (const entry of KB) {
        for (const kw of entry.keywords) {
                if (q.includes(kw)) {
                          // Return language-specific answer if available, else English default
                  return (entry.answers && entry.answers[langCode]) || entry.answer
                }
        }
  }

  // Fallback: partial word match (any keyword word appears in query)
  for (const entry of KB) {
        for (const kw of entry.keywords) {
                const words = kw.split(' ')
                if (words.some((w) => w.length > 4 && q.includes(w))) {
                          return (entry.answers && entry.answers[langCode]) || entry.answer
                }
        }
  }

  return null
}
