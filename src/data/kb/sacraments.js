/** Knowledge base — The Sacraments. Entry shape: see scripture.js */

const LG = 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html'
const SC = 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html'

export default [
  {
    id: 'real-presence',
    cat: 'sacraments',
    legacy: 'real presence',
    q: 'The bread and wine of Communion are only symbols. Jesus is not really present.',
    kw: ['real presence', 'transubstantiation', 'eucharist symbol', 'communion symbol', 'just a symbol', 'only a symbol', 'body and blood', 'eat my flesh', 'john 6', 'lords supper', 'holy communion', 'host', 'eucharist', 'simbolo lamang', 'simbolo lang', 'lawas ni kristo', 'katawan ni kristo'],
    a: `In John 6, Jesus says again and again that his flesh is "true food" and his blood "true drink." He says, "Unless you eat the flesh of the Son of Man and drink his blood, you have no life in you." His listeners took him literally and were scandalized. Jesus did not correct them. Instead, he used an even stronger verb, "trogo," which means to gnaw or chew. Many disciples left him over this. It is the only time in the Gospels people left Jesus over a teaching, and he let them go.

At the Last Supper, he said "This IS my body," not "this represents." Paul warns that anyone who eats unworthily "will be guilty of profaning the body and blood of the Lord." You cannot be guilty of the body of someone through a mere symbol.

"The flesh profits nothing" (John 6:63) refers to the merely natural, unbelieving way of understanding. It does not refer to Christ's flesh, which gives life to the world (John 6:51).

"Transubstantiation" is the Church's word for what happens: the substance of the bread and wine becomes Christ's Body and Blood, while the appearances remain. Every Christian for the first 1,000 years believed in the Real Presence, and the Orthodox and Luther did too.`,
    bible: [
      ['John 6:51-58', '"My flesh is true food… unless you eat the flesh of the Son of Man… you have no life in you."'],
      ['John 6:66-69', 'Many disciples leave; Peter: "Lord, to whom shall we go?"'],
      ['Matthew 26:26-28', '"Take, eat; this is my body… this is my blood of the covenant."'],
      ['1 Corinthians 10:16', 'The cup of blessing — is it not a participation in the blood of Christ?'],
      ['1 Corinthians 11:27-29', 'Whoever eats unworthily is guilty of the body and blood of the Lord.'],
      ['Luke 24:30-35', 'The disciples at Emmaus recognize him "in the breaking of the bread."'],
    ],
    ccc: [1373, 1374, 1375, 1376, 1381],
    fathers: [
      ['St. Ignatius of Antioch', 'Letter to the Smyrnaeans 7 (c. 107 AD)', 'Summary: the heretics abstain from the Eucharist because they do not confess that the Eucharist is the flesh of our Savior Jesus Christ, which suffered for our sins.'],
      ['St. Justin Martyr', 'First Apology 66 (c. 155 AD)', 'Summary: we do not receive these as common bread and drink; we are taught that this food is the flesh and blood of that Jesus who was made flesh.'],
      ['St. Cyril of Jerusalem', 'Mystagogical Catechesis 4 (c. 350 AD)', 'Summary: do not regard them as plain bread and wine, for they are the Body and Blood of Christ as the Master has declared.'],
    ],
    docs: [
      ['Council of Trent, Session XIII (1551)', 'Decree on the Most Holy Eucharist, chapters 1 and 4 (transubstantiation).'],
      ['Ecclesia de Eucharistia (John Paul II, 2003)', 'Encyclical on the Eucharist.', 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html'],
    ],
    say: '"When people left Jesus because he said \'eat my flesh,\' he didn\'t call them back to say \'it\'s only a symbol\' (John 6:66). And Ignatius, a disciple of John, called the Eucharist \'the flesh of our Savior.\'"',
    rel: ['mass-sacrifice', 'communion-one-kind', 'church-fathers'],
  },
  {
    id: 'mass-sacrifice',
    cat: 'sacraments',
    legacy: 'mass sacrifice',
    q: 'The Mass re-crucifies Jesus. Christ died once for all (Hebrews 10:10).',
    kw: ['mass sacrifice', 'mass is not a sacrifice', 'recrucify', 're-crucify', 'crucify jesus again', 'once for all', 'hebrews 10', 'sacrifice of the mass', 'altar', 'why the mass', 'misa', 'sakripisyo'],
    a: `Catholics agree completely: Christ was sacrificed once for all, and he cannot die again. The Mass does not repeat or add to Calvary. It makes the ONE sacrifice of Calvary present, so that we can share in it.

Jesus is a priest forever. In heaven, he continually presents his one offering to the Father, and Revelation shows him as "a Lamb standing, as though it had been slain." At Mass, heaven and earth meet. Jesus' command "Do this in remembrance (anamnesis) of me" uses a word for a memorial that makes a past saving event present, as the Passover did for the Jews.

The prophet Malachi foretold a "pure offering" offered "in every place" among the nations. The early Church saw this fulfilled in the Eucharist. Hebrews 13:10 says, "We have an altar."`,
    bible: [
      ['Hebrews 7:24-25', 'He holds his priesthood permanently and always lives to make intercession.'],
      ['Revelation 5:6', 'A Lamb standing, as though it had been slain.'],
      ['Malachi 1:11', 'In every place incense is offered to my name, and a pure offering.'],
      ['1 Corinthians 10:16-21', 'Paul compares the Lord\'s table with sacrificial altars.'],
      ['Hebrews 13:10', '"We have an altar from which those who serve the tent have no right to eat."'],
      ['Luke 22:19', '"Do this in remembrance (anamnesis) of me."'],
    ],
    ccc: [1362, 1363, 1364, 1365, 1366, 1367],
    fathers: [
      ['Didache 14', '(c. 70–100 AD)', 'Summary: gather on the Lord\'s Day, break bread, confess your sins so that your sacrifice may be pure — quoting Malachi 1:11.'],
      ['St. Cyprian of Carthage', 'Letter 63.14 (c. 253 AD)', 'Summary: the priest truly acts in Christ\'s place when he imitates what Christ did and offers a true and full sacrifice.'],
    ],
    docs: [
      ['Council of Trent, Session XXII (1562)', 'Doctrine on the Sacrifice of the Mass: the same victim, offered in an unbloody manner.'],
      ['Sacrosanctum Concilium (Vatican II, 1963)', 'Section 47.', SC],
    ],
    say: '"We don\'t crucify Jesus again. The Mass makes his one sacrifice present, the way Revelation shows the Lamb in heaven, \'standing as though slain\' (Rev 5:6)."',
    rel: ['real-presence', 'ministerial-priesthood'],
  },
  {
    id: 'confession',
    cat: 'sacraments',
    legacy: 'confession priest',
    q: 'Why confess to a priest? Only God can forgive sins. I confess directly to God.',
    kw: ['confession', 'confess to a priest', 'confess to god directly', 'why confess', 'only god forgives', 'priest forgive sins', 'sacrament of penance', 'reconciliation', 'kumpisal', 'mangumpisal', 'magkumpisal', 'nagkukumpisal', 'nangumpisal', 'kumpisal sa pari', 'pagkumpisal', 'confess'],
    a: `Catholics agree that only God forgives sins. The question is HOW God chose to do it. On Easter night, the risen Jesus breathed on the apostles and said: "Receive the Holy Spirit. If you forgive the sins of any, they are forgiven; if you retain the sins of any, they are retained." The apostles could not forgive or retain sins they never heard, so this implies confession.

The priest forgives as Christ's instrument ("in persona Christi"), not by his own power. Paul says God "gave us the ministry of reconciliation." The crowds glorified God for giving such authority "to men" (Matthew 9:8).

Confession also gives what private prayer cannot: the certainty of hearing "I absolve you," counsel, healing of the relationship with the Church, and real humility. Catholics are always encouraged to confess to God privately as well. That is how every Mass begins.`,
    bible: [
      ['John 20:21-23', '"If you forgive the sins of any, they are forgiven them."'],
      ['Matthew 9:6-8', 'The crowds glorified God, who had given such authority to men.'],
      ['2 Corinthians 5:18-20', 'God gave us the ministry of reconciliation; we are ambassadors for Christ.'],
      ['James 5:16', 'Confess your sins to one another.'],
      ['Matthew 16:19; 18:18', 'The power to bind and loose.'],
    ],
    ccc: [1441, 1442, 1456, 1461, 1467, 1468],
    fathers: [
      ['Didache 4.14', '(c. 70–100 AD)', '"In the church you shall confess your transgressions."'],
      ['St. Cyprian of Carthage', 'The Lapsed 28 (c. 251 AD)', 'Summary: urges sinners to confess while still alive, while their confession can be received and the satisfaction and remission given by the priests is acceptable to the Lord.'],
    ],
    docs: [
      ['Council of Trent, Session XIV (1551)', 'Doctrine on the Sacrament of Penance.'],
    ],
    say: '"Only God forgives, and he chose to forgive through his apostles: \'Whose sins you forgive are forgiven\' (John 20:23). And hearing \'I absolve you\' out loud is a real gift."',
    rel: ['ministerial-priesthood', 'indulgences', 'mortal-venial'],
  },
  {
    id: 'infant-baptism',
    cat: 'sacraments',
    legacy: 'born again',
    q: 'Babies cannot believe, so infant baptism is wrong. Only adult believers should be baptized.',
    kw: ['infant baptism', 'baby baptism', 'baptize babies', 'baptizing infants', 'believers baptism', 'babies cannot believe', 'bunyag bata', 'binyag sa sanggol', 'bawtismo sa bata'],
    a: `Baptism replaced circumcision as the sign of entry into God's covenant (Colossians 2:11-12). Israelite boys were circumcised at eight days old, long before they could believe. God has always welcomed children into his covenant family through their parents' faith.

On Pentecost Peter said, "The promise is for you AND FOR YOUR CHILDREN." The New Testament records whole HOUSEHOLDS being baptized: Lydia's, the jailer's, and Stephanas'. In that culture, a household included children and servants. Jesus said, "Let the children come to me, and do not hinder them."

Grace is a gift that no one earns, not even adults. An infant receiving grace before being able to ask for it is the clearest picture of that. The child is then raised in the faith and confirms it personally.

The earliest records describe infant baptism as an apostolic tradition, and no early Christian protested it as a novelty.`,
    bible: [
      ['Colossians 2:11-12', 'Circumcision made without hands… buried with him in baptism.'],
      ['Acts 2:38-39', 'The promise is to you and to your children.'],
      ['Acts 16:15, 33', 'Lydia "and her household" baptized; the jailer "and all his family."'],
      ['1 Corinthians 1:16', 'I baptized the household of Stephanas.'],
      ['Mark 10:14', '"Let the children come to me; do not hinder them."'],
    ],
    ccc: [1250, 1251, 1252, 1253],
    fathers: [
      ['St. Hippolytus of Rome', 'Apostolic Tradition 21 (c. 215 AD)', 'Summary: baptize the little children first; if they cannot speak for themselves, let their parents or someone from their family speak for them.'],
      ['Origen', 'Commentary on Romans 5.9 (c. 244 AD)', 'Summary: the Church received from the apostles the tradition of baptizing even infants.'],
      ['St. Cyprian & Council of Carthage', 'Letter 64 (c. 253 AD)', 'Summary: the council ruled that infants need not wait until the eighth day to be baptized.'],
    ],
    docs: [],
    say: '"Babies were circumcised into the Old Covenant at eight days old. Peter said the promise is \'for your children\' (Acts 2:39), and whole households were baptized."',
    rel: ['baptism-necessary', 'born-again'],
  },
  {
    id: 'baptism-necessary',
    cat: 'sacraments',
    q: 'Baptism is only a symbol of faith. It does not save anyone.',
    kw: ['baptism symbol', 'baptism does not save', 'baptism saves', 'baptism necessary', 'need baptism', 'is baptism required', 'thief on the cross', 'baptism of desire', 'bautismo', 'bunyag'],
    a: `Scripture says plainly: "Baptism, which corresponds to this, NOW SAVES YOU." Jesus said no one can enter the kingdom of God "unless he is born of water and the Spirit." Peter preached, "Repent and be baptized… for the forgiveness of your sins." Ananias told Paul, "Rise and be baptized, and wash away your sins."

Baptism saves not as magic but because Christ works through it. We are buried with him and raised to new life (Romans 6:3-4). It is "the washing of regeneration" (Titus 3:5).

God bound salvation to baptism, but he himself is not bound by his sacraments. That is why the Church teaches "baptism of blood" (martyrs) and "baptism of desire" (those who die seeking it). The thief on the cross was saved before Christian baptism was even instituted. That shows God's mercy, not a rule that we may skip what Jesus commanded.`,
    bible: [
      ['1 Peter 3:21', 'Baptism… now saves you.'],
      ['John 3:5', 'Unless one is born of water and the Spirit, he cannot enter the kingdom of God.'],
      ['Acts 2:38', 'Repent and be baptized for the forgiveness of your sins.'],
      ['Acts 22:16', 'Rise and be baptized, and wash away your sins.'],
      ['Mark 16:16', 'He who believes and is baptized will be saved.'],
      ['Titus 3:5', 'He saved us by the washing of regeneration and renewal in the Holy Spirit.'],
    ],
    ccc: [1213, 1257, 1258, 1259, 1260, 1263],
    fathers: [
      ['St. Justin Martyr', 'First Apology 61 (c. 155 AD)', 'Summary: those who believe are brought to the water and "regenerated" in the same way we were, for Christ said, unless you are born again you shall not enter the kingdom.'],
    ],
    docs: [],
    say: '"Peter literally wrote \'baptism now saves you\' (1 Pet 3:21). It\'s God\'s work, not ours: \'He saved us by the washing of regeneration\' (Titus 3:5)."',
    rel: ['infant-baptism', 'born-again', 'baptism-mode'],
  },
  {
    id: 'baptism-mode',
    cat: 'sacraments',
    q: 'Only baptism by full immersion is valid. Pouring water is not real baptism.',
    kw: ['immersion', 'full immersion', 'sprinkling', 'pouring water', 'baptism by pouring', 'dunk', 'lubog', 'buhos'],
    a: `"Baptizo" in Greek means to wash or to dip. It does not always mean full submersion. Luke 11:38 uses it for washing hands before a meal. The Catholic Church baptizes validly by immersion OR by pouring (infusion), and she considers immersion an especially expressive sign.

The Didache, a Christian manual possibly from the 1st century, explicitly allows pouring. If there is not enough running or still water, it says: "pour water three times on the head in the name of the Father and of the Son and of the Holy Spirit."

Some biblical baptisms happened in places where immersion would have been hard. Examples are 3,000 people in Jerusalem in one day (Acts 2:41) and the jailer at night in his house (Acts 16:33).`,
    bible: [
      ['Luke 11:38', '"Baptizo" used for washing before a meal.'],
      ['Ezekiel 36:25', 'I will sprinkle clean water upon you, and you shall be clean.'],
      ['Acts 16:33', 'The jailer and his family baptized at night, at once.'],
    ],
    ccc: [1239, 1240],
    fathers: [
      ['Didache 7', '(c. 70–100 AD)', '"If you have neither, pour water three times upon the head in the name of the Father and of the Son and of the Holy Spirit."'],
    ],
    docs: [],
    say: '"The Didache, one of the oldest Christian writings, already allowed baptism by pouring. The water and the Trinitarian words are what matter."',
    rel: ['baptism-necessary', 'infant-baptism'],
  },
  {
    id: 'confirmation',
    cat: 'sacraments',
    q: 'Confirmation is a man-made ritual. It is not in the Bible.',
    kw: ['confirmation', 'kumpil', 'chrism', 'laying on of hands holy spirit', 'gift of the holy spirit'],
    a: `In Acts 8, the Samaritans had already been baptized. Then the apostles Peter and John came and laid hands on them, and they received the Holy Spirit. In Acts 19, Paul baptizes the Ephesian disciples and then lays hands on them, and the Spirit comes upon them. Hebrews 6:2 lists "the laying on of hands" among the basic teachings of the faith, right after baptisms.

This is Confirmation. It completes baptism with the outpouring of the Holy Spirit for witness and mission. The anointing with chrism recalls the "anointing" Christians receive from God (2 Corinthians 1:21-22; 1 John 2:20).`,
    bible: [
      ['Acts 8:14-17', 'Peter and John lay hands on the baptized Samaritans, and they receive the Holy Spirit.'],
      ['Acts 19:5-6', 'Paul lays his hands on the newly baptized, and the Holy Spirit comes on them.'],
      ['Hebrews 6:1-2', 'The elementary teachings: baptisms and the laying on of hands.'],
      ['2 Corinthians 1:21-22', 'God has anointed us, put his seal on us, and given us his Spirit.'],
    ],
    ccc: [1285, 1288, 1289, 1302, 1303],
    fathers: [
      ['St. Cyprian of Carthage', 'Letter 72.9 (c. 256 AD)', 'Summary: as in Acts 8, those baptized are presented to the bishops, and by prayer and the imposition of hands they obtain the Holy Spirit.'],
    ],
    docs: [],
    say: '"Acts 8:14-17 describes it: the apostles laid hands on people who were already baptized, and they received the Holy Spirit. That\'s Confirmation."',
    rel: ['baptism-necessary', 'apostolic-succession'],
  },
  {
    id: 'anointing-sick',
    cat: 'sacraments',
    q: 'Anointing of the Sick and "last rites" have no basis in Scripture.',
    kw: ['anointing of the sick', 'last rites', 'extreme unction', 'oil for the sick', 'pahid', 'olyo'],
    a: `James gives a clear instruction: "Is any among you sick? Let him call for the presbyters (priests) of the Church, and let them pray over him, anointing him with oil in the name of the Lord… and if he has committed sins, he will be forgiven." That is exactly the sacrament.

The Twelve also "anointed with oil many that were sick and healed them" (Mark 6:13). The sacrament gives strength, peace and courage. It unites the sick person's suffering to Christ's, forgives sins, and sometimes restores bodily health.`,
    bible: [
      ['James 5:14-15', 'Call the presbyters… anointing him with oil… his sins will be forgiven.'],
      ['Mark 6:12-13', 'They anointed with oil many who were sick and healed them.'],
    ],
    ccc: [1510, 1511, 1512, 1513, 1520],
    fathers: [],
    docs: [
      ['Council of Trent, Session XIV (1551)', 'Doctrine on the Sacrament of Extreme Unction.'],
    ],
    say: '"Read James 5:14-15. Call the presbyters, anoint with oil, and sins are forgiven. That\'s the sacrament word for word."',
    rel: ['ministerial-priesthood', 'confession'],
  },
  {
    id: 'communion-one-kind',
    cat: 'sacraments',
    q: 'Catholics deny the cup to the people, disobeying "drink of it, all of you."',
    kw: ['receive only the host', 'communion under one kind', 'deny the cup', 'only bread', 'drink of it all of you', 'why no wine', 'precious blood'],
    a: `Jesus is risen and cannot be divided. He is present whole and entire, Body, Blood, soul and divinity, under EITHER form. Whoever receives the Host receives the whole Christ. That is why Paul can say, "whoever eats the bread OR drinks the cup unworthily is guilty of the body AND blood of the Lord."

The words "drink of it, all of you" were spoken to the apostles at the first Mass, and they were the priests. The Church often offers Communion under both kinds today. Whether the cup is also offered is a matter of pastoral practice, for reasons such as hygiene, reverence and large crowds. It is not a change in doctrine.`,
    bible: [
      ['1 Corinthians 11:27', 'Whoever eats the bread OR drinks the cup unworthily.'],
      ['Luke 24:30-31', 'At Emmaus, Jesus is recognized in the breaking of the bread.'],
      ['John 6:51', '"If anyone eats of this bread, he will live forever."'],
    ],
    ccc: [1377, 1390],
    fathers: [],
    docs: [
      ['Council of Trent, Session XXI (1562)', 'Doctrine on Communion under both kinds.'],
    ],
    say: '"The risen Jesus can\'t be cut in half. He\'s fully present in the Host. Paul says eating OR drinking unworthily profanes his body AND blood (1 Cor 11:27)."',
    rel: ['real-presence'],
  },
  {
    id: 'ministerial-priesthood',
    cat: 'sacraments',
    q: 'All believers are priests (1 Peter 2:9). A special Catholic priesthood is unbiblical.',
    kw: ['priesthood of all believers', 'no priests', 'priests unbiblical', 'why priests', 'ministerial priesthood', 'royal priesthood', '1 peter 2:9', 'pari', 'kaparian'],
    a: `Catholics believe in the priesthood of all believers! Every baptized person shares in Christ's priesthood and offers spiritual sacrifices. This is the "common priesthood."

But Israel had the same pattern. The whole nation was "a kingdom of priests" (Exodus 19:6), and God ALSO set apart the Levitical priesthood. 1 Peter 2:9 quotes Exodus 19:6. So a common priesthood does not rule out a ministerial one.

In the New Testament, Christ chooses the apostles and gives them the power to offer the Eucharist ("do this"), to forgive sins, and to ordain others by the laying on of hands. Paul describes his ministry as "priestly service" (Romans 15:16). Presbyters (from which comes the word "priest") anoint the sick and lead the churches.

Both priesthoods share in the ONE priesthood of Christ. They do not compete with it.`,
    bible: [
      ['Exodus 19:6', 'You shall be to me a kingdom of priests, and the Levites served as priests within it.'],
      ['1 Peter 2:5, 9', 'A holy and royal priesthood offering spiritual sacrifices.'],
      ['Romans 15:16', 'Paul: a minister of Christ Jesus in the priestly service (hierourgounta) of the Gospel.'],
      ['James 5:14', 'Call for the presbyters of the Church.'],
      ['Acts 14:23', 'They appointed presbyters in every church with prayer and fasting.'],
    ],
    ccc: [1120, 1544, 1545, 1546, 1547, 1548],
    fathers: [
      ['St. Clement of Rome', 'Letter to the Corinthians 40–44 (c. 96 AD)', 'Summary: compares the Church\'s ordered ministry to the high priest, priests and Levites, and insists on the appointed order.'],
    ],
    docs: [
      ['Lumen Gentium (Vatican II, 1964)', 'Section 10: the common and the ministerial priesthood differ in essence, not only in degree.', LG],
    ],
    say: '"Israel was a \'kingdom of priests\' AND had Levitical priests. The Church is the same: all of us share Christ\'s priesthood, and some are ordained to serve the rest."',
    rel: ['apostolic-succession', 'priest-celibacy', 'confession'],
  },
  {
    id: 'priest-celibacy',
    cat: 'sacraments',
    q: 'Forcing priests to be celibate is unbiblical. Paul warned against "forbidding to marry" (1 Timothy 4:3), and Peter was married.',
    kw: ['celibacy', 'celibate', 'priests cannot marry', 'priests marry', 'forbidding to marry', '1 timothy 4:3', 'peter was married', 'married priests', 'dili makaminyo', 'hindi pwedeng mag-asawa'],
    a: `Celibacy for priests is a discipline, not a doctrine, and no one is forced into it. Men freely choose the priesthood knowing the requirement. In the Eastern Catholic Churches, married men can be ordained priests. Some married former Protestant ministers have also become Catholic priests.

1 Timothy 4:3 condemns false teachers who forbade marriage as EVIL. Some Gnostic groups held that view. The Catholic Church teaches that marriage is a holy sacrament. Choosing not to marry for the sake of the Kingdom is a different thing entirely, and it is exactly what Jesus and Paul praised.

Yes, Peter was married (Mark 1:30). That is why the Church never said celibacy is required by divine law. The Latin Church has kept this discipline for centuries, following the example of Christ himself, so that priests can give their whole lives to God and his people.`,
    bible: [
      ['Matthew 19:12', 'Some have made themselves eunuchs for the sake of the kingdom; let him who can accept this accept it.'],
      ['1 Corinthians 7:7-8, 32-35', 'Paul wishes all were as he is; the unmarried man is anxious about the affairs of the Lord.'],
      ['1 Timothy 4:1-3', 'False teachers forbid marriage, condemning what God created good.'],
      ['Mark 1:30', 'Peter\'s mother-in-law.'],
    ],
    ccc: [1579, 1580, 1618, 1620],
    fathers: [],
    docs: [
      ['Sacerdotalis Caelibatus (Paul VI, 1967)', 'Encyclical on priestly celibacy.', 'https://www.vatican.va/content/paul-vi/en/encyclicals/documents/hf_p-vi_enc_24061967_sacerdotalis.html'],
    ],
    say: '"It\'s a discipline freely chosen, not a doctrine. Eastern Catholic priests can be married. Jesus and Paul both praised celibacy for the Kingdom (Matt 19:12; 1 Cor 7:32)."',
    rel: ['ministerial-priesthood', 'women-priests'],
  },
  {
    id: 'women-priests',
    cat: 'sacraments',
    q: 'The Church is sexist because it does not ordain women as priests.',
    kw: ['women priests', 'women priest', 'female priests', 'ordain women', 'church sexist', 'women in the church', 'babaye nga pari', 'babaeng pari'],
    a: `The Church teaches that she has no authority to ordain women as priests. The reason is not that women are inferior. It is that Christ freely chose only men as his apostles. He did this even though he broke many cultural rules about women, and even though his own mother was holier than any apostle.

The priest acts "in the person of Christ," the Bridegroom, offering himself for his Bride, the Church. The Church has always understood this sign to belong to men.

Priesthood is a service, not a prize or a measure of worth. The greatest human person in the Church, Mary, was never a priest. Women saints like St. Catherine of Siena and St. Teresa of Ávila are Doctors of the Church. Women lead countless schools, hospitals, religious orders and ministries.`,
    bible: [
      ['Mark 3:13-19', 'Jesus calls "those whom he desired" and appoints the Twelve.'],
      ['Luke 8:1-3', 'Women disciples travel and minister with Jesus, yet are not among the Twelve.'],
      ['Ephesians 5:25-32', 'Christ the Bridegroom gives himself up for the Church, his Bride.'],
    ],
    ccc: [1577, 1578],
    fathers: [],
    docs: [
      ['Ordinatio Sacerdotalis (John Paul II, 1994)', 'The Church has no authority to confer priestly ordination on women.', 'https://www.vatican.va/content/john-paul-ii/en/apost_letters/1994/documents/hf_jp-ii_apl_19940522_ordinatio-sacerdotalis.html'],
    ],
    say: '"Jesus broke every social rule about women, yet chose only men as apostles. The Church follows his choice. And the greatest saint, Mary, was never a priest."',
    rel: ['priest-celibacy', 'ministerial-priesthood'],
  },
  {
    id: 'annulment',
    cat: 'sacraments',
    q: 'An annulment is just "Catholic divorce."',
    kw: ['annulment', 'catholic divorce', 'divorce', 'remarriage', 'divorced and remarried', 'nullity', 'annul', 'diborsyo', 'annulment kasal'],
    a: `A divorce claims to END a real marriage. An annulment, properly called a "declaration of nullity," is a finding that a valid marriage NEVER existed, even though a wedding took place. This can happen when something essential was missing from the start, such as free consent, the capacity to consent, or the right form.

The Church holds that a valid, consummated marriage between baptized persons cannot be dissolved by any human power. That is exactly Jesus' teaching: "What God has joined together, let no man put asunder." A tribunal investigates the evidence and then gives its decision. Many cases end with the marriage upheld as valid.`,
    bible: [
      ['Matthew 19:4-9', '"What God has joined together, let no man separate."'],
      ['Mark 10:11-12', 'Whoever divorces and marries another commits adultery.'],
      ['1 Corinthians 7:10-11', 'The wife should not separate from her husband.'],
    ],
    ccc: [1625, 1628, 1629, 1640, 2382, 2384],
    fathers: [],
    docs: [
      ['Code of Canon Law (1983)', 'Canons 1095–1103 (consent) and 1141 (indissolubility).', 'https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html'],
    ],
    say: '"Divorce says a real marriage ended. An annulment says, after investigation, that a real marriage never began. The Church holds to Jesus\' word: what God joins, no one separates."',
    rel: ['contraception'],
  },
]
