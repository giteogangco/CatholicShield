/** Knowledge base — Salvation & Faith, Purgatory & the Last Things. Entry shape: see scripture.js */

const JDDJ = 'https://www.vatican.va/roman_curia/pontifical_councils/chrstuni/documents/rc_pc_chrstuni_doc_31101999_cath-luth-joint-declaration_en.html'
const SPE = 'https://www.vatican.va/content/benedict-xvi/en/encyclicals/documents/hf_ben-xvi_enc_20071130_spe-salvi.html'

export default [
  {
    id: 'faith-alone',
    cat: 'salvation',
    legacy: 'sola fide',
    q: 'We are saved by faith alone (Sola Fide). Catholics add works to faith.',
    kw: ['faith alone', 'sola fide', 'saved by faith', 'justified by faith', 'romans 3:28', 'ephesians 2:8', 'faith without works', 'pagtuo lamang', 'pananampalataya lamang'],
    a: `Catholics believe we are saved by GRACE, through faith, as a free gift. No one can earn it. But the only place in the Bible where the words "faith alone" appear says: "A man is justified by works and NOT BY FAITH ALONE" (James 2:24).

When Paul says we are justified by faith "apart from works of the law," he means the works of the Mosaic Law, such as circumcision. He is answering those who said Gentiles had to become Jews first. He never means that a Christian can be saved by a "faith" that does not love. The faith that saves is "faith working through love" (Galatians 5:6). Even Ephesians 2:8-9 continues in verse 10: we are "created in Christ Jesus FOR good works."

When Luther translated Romans 3:28 into German, he added the word "allein" ("alone"), and he defended doing so. In 1999, Catholics and Lutherans signed a Joint Declaration. It says that "by grace alone, in faith in Christ's saving work and not because of any merit on our part," we are accepted by God and receive the Holy Spirit, who renews our hearts and equips us for good works.`,
    bible: [
      ['James 2:24', 'A man is justified by works and not by faith alone.'],
      ['James 2:17, 26', 'Faith without works is dead.'],
      ['Galatians 5:6', 'What counts is faith working through love.'],
      ['Ephesians 2:8-10', 'By grace you have been saved through faith… created for good works.'],
      ['Romans 2:6-7', 'He will render to each according to his works: eternal life to those who persevere in doing good.'],
      ['Matthew 25:31-46', 'The final judgment: "As you did it to one of the least of these, you did it to me."'],
    ],
    ccc: [1987, 1991, 1992, 1996, 2007, 2010, 2011],
    fathers: [
      ['St. Clement of Rome', 'Letter to the Corinthians 32–33 (c. 96 AD)', 'Summary: we are justified not by ourselves but through faith; therefore let us not be slothful in good works, but hasten to do them with zeal.'],
    ],
    docs: [
      ['Council of Trent, Session VI (1547)', 'Decree on Justification, chapters 7–8 and canon 1.'],
      ['Joint Declaration on the Doctrine of Justification (1999)', 'Catholic–Lutheran agreement on the basic truths of justification.', JDDJ],
    ],
    say: '"We agree that salvation is a free gift of grace! But the only verse with \'faith alone\' says \'NOT by faith alone\' (James 2:24). Saving faith is faith working through love (Gal 5:6)."',
    rel: ['earn-salvation', 'once-saved', 'are-you-saved'],
  },
  {
    id: 'earn-salvation',
    cat: 'salvation',
    legacy: 'catholics not saved',
    q: 'Catholics try to earn their way to heaven with good works.',
    kw: ['earn salvation', 'earning salvation', 'works salvation', 'saved by works', 'good works to heaven', 'catholics not saved', 'catholics are not saved', 'works based', 'merit', 'buhat', 'gawa'],
    a: `This is one of the most common misunderstandings. The Catholic Church has solemnly taught for centuries that we CANNOT earn salvation. The Council of Trent (1547) declared that nothing that comes before justification, "whether faith or works," merits the grace of justification. It is pure gift.

What Catholics do believe is that once God's grace lives in us, it bears fruit. God crowns those good works, which are first his own gifts, with reward. This is what the Catechism calls "merit." It is never something we claim from God by our own power.

Paul puts both truths together: "Work out your salvation with fear and trembling; for it is GOD who works in you, both to will and to work for his good pleasure."`,
    bible: [
      ['Ephesians 2:8-9', 'By grace you have been saved through faith; it is the gift of God, not because of works.'],
      ['Titus 3:5', 'He saved us, not because of deeds done by us in righteousness, but by his mercy.'],
      ['Philippians 2:12-13', 'Work out your salvation… for God is at work in you.'],
      ['John 15:5', 'Apart from me you can do nothing.'],
      ['Romans 2:6-7', 'Eternal life to those who patiently do good.'],
    ],
    ccc: [1996, 1998, 2003, 2007, 2008, 2010, 2011],
    fathers: [
      ['St. Augustine', 'Letter 194.5.19 (c. 418 AD)', 'Summary: when God crowns our merits, he crowns nothing other than his own gifts.'],
    ],
    docs: [
      ['Council of Trent, Session VI (1547)', 'Decree on Justification, chapter 8: nothing that precedes justification, whether faith or works, merits the grace of justification.'],
      ['Joint Declaration on the Doctrine of Justification (1999)', 'Section 15: by grace alone, not because of any merit on our part.', JDDJ],
    ],
    say: '"The Church officially teaches that we can\'t earn salvation (Trent, Session VI, ch. 8). Our good works are God\'s grace working in us (Phil 2:13)."',
    rel: ['faith-alone', 'are-you-saved'],
  },
  {
    id: 'once-saved',
    cat: 'salvation',
    legacy: 'once saved always saved',
    q: 'Once saved, always saved. A true Christian can never lose salvation.',
    kw: ['once saved always saved', 'eternal security', 'lose salvation', 'lose your salvation', 'can you lose salvation', 'osas', 'assurance of salvation', 'cannot lose salvation', 'mawala ang kaluwasan'],
    a: `Scripture warns believers again and again that they can fall away. These warnings would make no sense if falling away were impossible.

Jesus says branches that do not remain in him are cut off and burned. Paul tells the Roman Christians that they will be cut off unless they continue in God's kindness. He even disciplines himself "lest, after preaching to others, I myself should be disqualified." Hebrews warns that those who were "enlightened" and "shared in the Holy Spirit" can still fall away. Jesus says, "He who endures to the end will be saved."

This is not a reason for fear. Catholics have real confidence, "the assurance of hope," because God is faithful and always ready to forgive the repentant. But we rely on his grace each day, without presuming on it.`,
    bible: [
      ['John 15:5-6', 'If anyone does not abide in me he is thrown away like a branch and withers.'],
      ['Romans 11:22', 'Note the kindness of God, provided you continue in his kindness; otherwise you too will be cut off.'],
      ['1 Corinthians 9:27', 'Lest after preaching to others I myself should be disqualified.'],
      ['Hebrews 6:4-6; 10:26-29', 'Warnings to those once enlightened who fall away.'],
      ['Matthew 24:13', 'He who endures to the end will be saved.'],
      ['Galatians 5:4', 'You have fallen away from grace.'],
    ],
    ccc: [162, 1821, 1861, 2016, 2091, 2092],
    fathers: [
      ['St. Augustine', 'On the Gift of Perseverance (c. 429 AD)', 'Summary: final perseverance to the end is itself a gift of God that must be prayed for.'],
    ],
    docs: [
      ['Council of Trent, Session VI (1547)', 'Decree on Justification, chapters 12–13: on presumption and the gift of perseverance.'],
    ],
    say: '"Paul himself said he disciplined his body \'lest I myself be disqualified\' (1 Cor 9:27). We trust God completely, and we keep walking with him to the end (Matt 24:13)."',
    rel: ['are-you-saved', 'mortal-venial', 'faith-alone'],
  },
  {
    id: 'are-you-saved',
    cat: 'salvation',
    q: '"Have you been saved? Do you know for sure you are going to heaven?"',
    kw: ['are you saved', 'have you been saved', 'do you know if you are going to heaven', 'know you will go to heaven', 'accepted jesus', 'when were you saved', 'naluwas ka na ba', 'ligtas ka na ba'],
    a: `A good Catholic answer is: "Yes! I HAVE BEEN saved, I AM BEING saved, and I HOPE TO BE saved." Scripture speaks of salvation in all three tenses:
• Past: "In this hope we were saved" (Romans 8:24). "By grace you have been saved" (Ephesians 2:5). This happened at Baptism.
• Present: "To us who are being saved, it is the power of God" (1 Corinthians 1:18). "Work out your salvation" (Philippians 2:12).
• Future: "He who endures to the end will be saved" (Matthew 10:22). "Much more shall we be saved by him" (Romans 5:9-10).

Catholics have a confident hope based on God's promises and his faithfulness. That confidence is not based on our feelings. John writes "that you may know that you have eternal life" (1 John 5:13). We know it the way we know any promise from someone faithful, while we remain in him.`,
    bible: [
      ['Romans 8:24', 'In this hope we were saved.'],
      ['1 Corinthians 1:18', 'To us who are being saved it is the power of God.'],
      ['Romans 5:9-10', 'We shall be saved by him from the wrath of God.'],
      ['Philippians 2:12', 'Work out your salvation with fear and trembling.'],
      ['1 John 5:13', 'That you may know that you have eternal life.'],
    ],
    ccc: [1817, 1818, 1820, 1821, 1987],
    fathers: [],
    docs: [],
    say: '"Yes! I was saved at baptism, I\'m being saved as I follow Jesus, and I confidently hope to be saved on the last day. Scripture uses all three tenses."',
    rel: ['once-saved', 'faith-alone', 'born-again'],
  },
  {
    id: 'born-again',
    cat: 'salvation',
    q: 'Catholics are not "born again." You must accept Jesus personally to be born again.',
    kw: ['born again', 'born-again', 'are you born again', 'catholics not born again', 'john 3:3', 'born of water and spirit', 'regeneration', 'natawo pag-usab', 'muling isilang'],
    a: `Every validly baptized Catholic is born again. When Jesus told Nicodemus "You must be born again" (or "born from above"), he explained: "Unless one is born of WATER and the Spirit, he cannot enter the kingdom of God." Right after this conversation, John tells us that Jesus and his disciples went out baptizing (John 3:22).

Paul calls baptism "the washing of REGENERATION," which means new birth. For 1,500 years, all Christians understood John 3:5 as referring to baptism.

Being born again is the beginning of the Christian life. Catholics are then called to live it every day, through personal conversion, prayer, the sacraments and love.`,
    bible: [
      ['John 3:3-5', 'Unless one is born of water and the Spirit, he cannot enter the kingdom of God.'],
      ['John 3:22', 'Jesus and his disciples went into Judea, and there he remained with them and baptized.'],
      ['Titus 3:5', 'He saved us by the washing of regeneration and renewal in the Holy Spirit.'],
      ['1 Peter 1:3, 23', 'Born anew to a living hope.'],
    ],
    ccc: [1213, 1215, 1262, 1265],
    fathers: [
      ['St. Justin Martyr', 'First Apology 61 (c. 155 AD)', 'Summary: those who believe are brought where there is water and are regenerated, for Christ said, "Unless you are born again, you shall not enter the kingdom of heaven."'],
    ],
    docs: [],
    say: '"I am born again, by water and the Spirit, exactly as Jesus described in John 3:5. I was born again in baptism, and I try to live that new life every day."',
    rel: ['baptism-necessary', 'personal-relationship', 'are-you-saved'],
  },
  {
    id: 'personal-relationship',
    cat: 'salvation',
    q: 'Catholics have religion, but not a personal relationship with Jesus.',
    kw: ['personal relationship', 'personal relationship with jesus', 'personal lord and savior', 'personal savior', 'religion not relationship', 'catholics dont know jesus', 'accept jesus', 'pagdawat kang hesus', 'tanggapin si hesus'],
    a: `A personal relationship with Jesus is at the very heart of the Catholic faith. The Catechism defines prayer as "a vital and personal relationship with the living and true God." Pope Benedict XVI wrote that being Christian begins with "the encounter with an event, a person." Pope Francis invited every Christian "to a renewed personal encounter with Jesus Christ."

It is hard to imagine anything more personal than what Catholics believe happens in Holy Communion: Jesus gives us his own Body and Blood, and we become one with him.

Catholics live this relationship in prayer, Scripture, the sacraments, and the Church, which is his Body. A relationship with Jesus includes a relationship with his family. "Religion" is the outward shape of that love, much as a family has traditions.`,
    bible: [
      ['John 15:4-5', 'Abide in me, and I in you.'],
      ['John 6:56', 'He who eats my flesh and drinks my blood abides in me, and I in him.'],
      ['Galatians 2:20', 'It is no longer I who live, but Christ who lives in me.'],
      ['James 1:27', 'Religion that is pure and undefiled before God is this…'],
    ],
    ccc: [1391, 2558, 2560, 2564],
    fathers: [],
    docs: [
      ['Deus Caritas Est (Benedict XVI, 2005)', 'Section 1: being Christian is the encounter with an event, a person.', 'https://www.vatican.va/content/benedict-xvi/en/encyclicals/documents/hf_ben-xvi_enc_20051225_deus-caritas-est.html'],
      ['Evangelii Gaudium (Francis, 2013)', 'Section 3: a renewed personal encounter with Jesus Christ.', 'https://www.vatican.va/content/francesco/en/apost_exhortations/documents/papa-francesco_esortazione-ap_20131124_evangelii-gaudium.html'],
    ],
    say: '"What could be more personal than receiving Jesus himself in Communion? \'He who eats my flesh abides in me, and I in him\' (John 6:56)."',
    rel: ['born-again', 'real-presence'],
  },
  {
    id: 'mortal-venial',
    cat: 'salvation',
    q: 'All sins are equal in God\'s eyes. There is no such thing as mortal and venial sin.',
    kw: ['all sins are equal', 'mortal sin', 'venial sin', 'mortal and venial', 'sin unto death', 'big sin small sin', 'sin is sin', 'mortal nga sala', 'mabigat na kasalanan'],
    a: `Every sin offends God, but Scripture clearly teaches that not all sins are equally serious. John writes: "There is sin which is mortal (unto death)… All wrongdoing is sin, but there is sin which is not mortal." Jesus told Pilate that the one who handed him over "has the greater sin." He spoke of the "weightier matters of the law." He also said that some servants will receive a heavier punishment than others.

A mortal sin destroys the life of grace and charity in the soul. It requires grave matter, full knowledge and deliberate consent. A venial sin wounds that love but does not kill it. Common sense agrees: a white lie and a murder are both wrong, but they are not equally wrong.`,
    bible: [
      ['1 John 5:16-17', 'There is sin which is mortal… and there is sin which is not mortal.'],
      ['John 19:11', 'He who delivered me to you has the greater sin.'],
      ['Matthew 23:23', 'You have neglected the weightier matters of the law.'],
      ['Luke 12:47-48', 'Some receive a severe beating, others a light one.'],
    ],
    ccc: [1854, 1855, 1857, 1858, 1859, 1862, 1863],
    fathers: [],
    docs: [],
    say: '"John himself distinguished sin that is \'mortal\' from sin that is \'not mortal\' (1 John 5:16-17). A lie and a murder are both sins, but they\'re not equal."',
    rel: ['confession', 'once-saved'],
  },
  {
    id: 'purgatory',
    cat: 'purgatory',
    legacy: 'purgatory bible',
    q: 'Purgatory is not in the Bible. It was invented by the Catholic Church.',
    kw: ['purgatory', 'purgatoryo', 'purgatory not in the bible', 'purification after death', 'cleansing fire', '1 corinthians 3:15', 'saved as through fire'],
    a: `The word "purgatory" is not in the Bible, and neither is "Trinity." The REALITY is. Nothing unclean will enter heaven (Revelation 21:27), and without holiness no one will see the Lord (Hebrews 12:14). Most of us die forgiven but not yet perfect in love. Purgatory is God's final purification of those who are saved. It is not a "second chance," and it is not an alternative to Christ's sacrifice. It is Christ's sacrifice applied to finish the work he began in us (Philippians 1:6).

Paul describes a judgment where a person's works are tested by fire: "If any man's work is burned up, he will suffer loss, though he himself will be saved, but only as through fire." Jesus speaks of sins that will not be forgiven "in this age or in the age to come," which implies some forgiveness after death. 2 Maccabees 12 praises praying and offering sacrifice for the dead, "that they might be delivered from their sin." Jews still pray for the dead today (the Kaddish).`,
    bible: [
      ['1 Corinthians 3:13-15', 'He will suffer loss, though he himself will be saved, but only as through fire.'],
      ['Revelation 21:27', 'Nothing unclean shall enter it.'],
      ['Matthew 12:32', 'Not forgiven, either in this age or in the age to come.'],
      ['2 Maccabees 12:43-46', 'It is a holy and wholesome thought to pray for the dead, that they may be loosed from sins.'],
      ['Hebrews 12:14', 'Strive for the holiness without which no one will see the Lord.'],
      ['Matthew 5:25-26', 'You will not get out till you have paid the last penny.'],
    ],
    ccc: [1030, 1031, 1032, 1472],
    fathers: [
      ['Tertullian', 'The Crown 3 (c. 211 AD)', 'Summary: we make offerings for the dead on the anniversary of their death.'],
      ['Inscription of Abercius', 'Epitaph (c. 190 AD)', 'Summary: the bishop asks every fellow believer who reads it to pray for him.'],
      ['St. Augustine', 'Confessions 9.13 (c. 400 AD)', 'Summary: Augustine prays for his dead mother, St. Monica, as she had asked to be remembered at the altar.'],
    ],
    docs: [
      ['Council of Trent, Session XXV (1563)', 'Decree on Purgatory.'],
      ['Spe Salvi (Benedict XVI, 2007)', 'Sections 45–48: purgatory as the purifying encounter with Christ.', SPE],
    ],
    say: '"Paul says some will be saved \'but only as through fire\' (1 Cor 3:15). Purgatory isn\'t a second chance. It\'s Christ finishing his work of making us holy."',
    rel: ['pray-for-dead', 'indulgences', 'deuterocanon'],
  },
  {
    id: 'pray-for-dead',
    cat: 'purgatory',
    q: 'Praying for the dead is useless. After death, there is only the judgment (Hebrews 9:27).',
    kw: ['pray for the dead', 'praying for the dead', 'mass for the dead', 'hebrews 9:27', 'all souls', 'novena for the dead', 'pag-ampo sa patay', 'dasal sa patay', 'pasiyam', 'undas'],
    a: `Hebrews 9:27 says we die once and then face judgment. Catholics agree. There is no reincarnation, and no second chance to choose God. But the souls in purgatory have already been judged and saved. They are being purified, and our love can still reach them, because death does not break the communion of the Body of Christ.

Judas Maccabeus offered sacrifice for fallen soldiers "that they might be delivered from their sin." Paul appears to pray for Onesiphorus after his death. He speaks of him in the past tense and greets only his household: "May the Lord grant him to find mercy from the Lord on that Day."

Praying for the dead is among the oldest Christian practices. Many Filipino customs, such as the "pasiyam" (nine-day prayers) and All Souls' Day, carry this ancient faith.`,
    bible: [
      ['2 Maccabees 12:43-46', 'He made atonement for the dead, that they might be delivered from their sin.'],
      ['2 Timothy 1:16-18', '"May the Lord grant him to find mercy from the Lord on that Day."'],
      ['Romans 8:38-39', 'Neither death nor life can separate us from the love of God in Christ.'],
    ],
    ccc: [958, 1032, 1371],
    fathers: [
      ['Tertullian', 'On Monogamy 10 (c. 213 AD)', 'Summary: a widow prays for her late husband\'s soul and offers on the anniversary of his death.'],
      ['St. Cyril of Jerusalem', 'Mystagogical Catechesis 5.9 (c. 350 AD)', 'Summary: at the Eucharist we pray for those who have fallen asleep, believing it a great benefit to their souls.'],
    ],
    docs: [],
    say: '"Death doesn\'t break the Body of Christ. Paul prayed that his friend Onesiphorus would find mercy \'on that Day\' (2 Tim 1:18), and Christians have prayed for the dead since the beginning."',
    rel: ['purgatory', 'pray-to-saints'],
  },
  {
    id: 'indulgences',
    cat: 'purgatory',
    q: 'The Catholic Church sells forgiveness through indulgences.',
    kw: ['indulgence', 'indulgences', 'selling indulgences', 'sell forgiveness', 'buy forgiveness', 'tetzel', 'plenary indulgence', 'temporal punishment', 'indulhensiya'],
    a: `An indulgence is NOT forgiveness of sins, and it is NOT permission to sin. Sins must already be forgiven, through repentance and confession, before any indulgence applies. An indulgence removes "temporal punishment," the lingering effects of forgiven sin that would otherwise need purification. The Church does this by drawing on the merits of Christ and the saints, using the power to "bind and loose" that Christ gave her.

Scripture shows forgiveness with consequences that remain. David was forgiven his adultery and murder, yet the child still died (2 Samuel 12:13-14).

In the 1500s, some preachers like Johann Tetzel abused indulgences by tying them to donations. That was a real scandal. The Council of Trent condemned "all evil gains" connected with them, and the sale of indulgences is forbidden. Today an indulgence requires confession, Communion, prayer for the pope's intentions, and freedom from attachment to sin. It costs no money.`,
    bible: [
      ['2 Samuel 12:13-14', 'David is forgiven, yet the consequence remains.'],
      ['Matthew 16:19', 'Whatever you loose on earth shall be loosed in heaven.'],
      ['Colossians 1:24', 'In my flesh I complete what is lacking in Christ\'s afflictions for the sake of his body, the Church.'],
    ],
    ccc: [1471, 1472, 1473, 1475, 1478, 1479],
    fathers: [],
    docs: [
      ['Council of Trent, Session XXV (1563)', 'Decree on Indulgences: abuses and "all evil gains" are to be abolished.'],
      ['Indulgentiarum Doctrina (Paul VI, 1967)', 'Apostolic constitution on indulgences.', 'https://www.vatican.va/content/paul-vi/en/apost_constitutions/documents/hf_p-vi_apc_01011967_indulgentiarum-doctrina.html'],
    ],
    say: '"An indulgence never forgives sin, and it can\'t be bought. The sins are already forgiven in confession. The abuses of the 1500s were real, and the Church condemned them at Trent."',
    rel: ['purgatory', 'confession'],
  },
  {
    id: 'hell',
    cat: 'salvation',
    q: 'A loving God would never send anyone to hell.',
    kw: ['hell', 'loving god hell', 'eternal punishment', 'why does god send people to hell', 'impyerno', 'infierno', 'no hell'],
    a: `God sends no one to hell against their will. "God predestines no one to go to hell." Hell is the state of definitive self-exclusion from communion with God. It is chosen by those who freely and finally refuse his love. God "desires all men to be saved," and Jesus died for everyone.

Love does not force itself. If our freedom to say "no" to God is real, then the possibility of a final "no" is real too. Jesus spoke about hell more than anyone else in the Bible. He did it to warn us, not to frighten us for no reason.

The Church has never declared that any particular person is in hell. We pray for everyone, and we trust that God's mercy and justice are perfect.`,
    bible: [
      ['1 Timothy 2:4', 'God desires all men to be saved.'],
      ['2 Peter 3:9', 'Not wishing that any should perish, but that all should reach repentance.'],
      ['Matthew 25:41, 46', 'Depart from me… into the eternal fire. They will go away into eternal punishment.'],
      ['Ezekiel 33:11', 'I have no pleasure in the death of the wicked.'],
    ],
    ccc: [1033, 1034, 1035, 1036, 1037],
    fathers: [],
    docs: [],
    say: '"God doesn\'t want anyone lost (2 Pet 3:9). Hell is what remains when someone finally refuses love. God respects our freedom that much."',
    rel: ['purgatory', 'problem-of-evil'],
  },
  {
    id: 'rapture',
    cat: 'salvation',
    q: 'Catholics deny the Rapture, when believers will be secretly taken before the tribulation.',
    kw: ['rapture', 'left behind', 'secret rapture', 'pre tribulation', 'tribulation', 'end times', 'second coming', 'end of the world', 'katapusan sa kalibutan', 'katapusan ng mundo'],
    a: `Catholics believe Christ will come again in glory, visibly, to judge the living and the dead, and that believers will be "caught up" to meet him (1 Thessalonians 4:17). What Catholics do not accept is the idea of a SECRET rapture years before the Second Coming. Neither did any Christian for 1,800 years. That idea was popularized in the 1830s by John Nelson Darby.

1 Thessalonians 4:16-17 is anything but secret. It has a loud command, the archangel's voice and God's trumpet. It describes the one Second Coming. The word "meet" (apantesis) was used for citizens going out to welcome a visiting king and escort him back into the city. Jesus himself said the weeds are gathered first, then the wheat (Matthew 13:30).

The Church teaches that before Christ comes, the Church will pass through a final trial. We should always be ready. Jesus said no one knows the day or the hour, so date-setting is unbiblical.`,
    bible: [
      ['1 Thessalonians 4:16-17', 'The Lord descends with a cry of command, the archangel\'s voice, the trumpet of God.'],
      ['Matthew 24:36', 'Of that day and hour no one knows.'],
      ['Matthew 13:30', 'Gather the weeds first… but gather the wheat into my barn.'],
      ['Acts 1:11', 'This Jesus will come in the same way as you saw him go.'],
    ],
    ccc: [668, 671, 673, 675, 677, 681, 682],
    fathers: [],
    docs: [],
    say: '"We believe Jesus will return and gather his people! But 1 Thess 4:16 is loud, with trumpets and an archangel, not secret. And Jesus said no one knows the day or hour."',
    rel: ['pope-antichrist', 'hell'],
  },
]
