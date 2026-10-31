/** Knowledge base — Mary & the Saints, images and relics. Entry shape: see scripture.js */

const LG = 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html'

export default [
  {
    id: 'worship-mary',
    cat: 'mary',
    legacy: 'worship mary',
    q: 'Catholics worship Mary as a goddess.',
    kw: ['worship mary', 'worshipping mary', 'mary worship', 'mary goddess', 'idolize mary', 'adore mary', 'mary idol', 'too much mary', 'mariolatry', 'sinasamba si maria', 'gisimba si maria'],
    a: `Catholics do not worship Mary. Worship, called "latria" (adoration), belongs to God alone. Mary is a creature, saved by her Son. We give her "hyperdulia," the highest honor given to any saint, because God himself honored her first. He chose her to be the mother of his Son.

Honoring Mary does not take anything away from Jesus, just as honoring a friend's mother does not insult the friend. Everything about Mary points to Christ. Her last recorded words in Scripture are "Do whatever he tells you."

The Church has always condemned treating Mary as a goddess. In the 4th century, St. Epiphanius condemned a group that offered sacrifices to her.`,
    bible: [
      ['Luke 1:28', 'The angel greets her: "Hail, full of grace, the Lord is with you."'],
      ['Luke 1:42', 'Elizabeth, filled with the Holy Spirit: "Blessed are you among women."'],
      ['Luke 1:48', '"All generations will call me blessed."'],
      ['John 2:5', '"Do whatever he tells you."'],
    ],
    ccc: [971, 2097, 2132],
    fathers: [
      ['St. Epiphanius of Salamis', 'Panarion 79 (c. 375 AD)', 'Summary: Mary should be honored, but the Father, Son and Holy Spirit should be worshipped; no one should worship Mary.'],
    ],
    docs: [
      ['Lumen Gentium (Vatican II, 1964)', 'Section 66: devotion to Mary differs essentially from the adoration given to the Incarnate Word, the Father and the Spirit.', LG],
    ],
    say: '"We honor Mary because God honored her first. Scripture says all generations will call her blessed (Luke 1:48). Worship belongs to God alone, and Mary would be the first to say so."',
    rel: ['mother-of-god', 'one-mediator', 'rosary'],
  },
  {
    id: 'mother-of-god',
    cat: 'mary',
    q: 'Mary cannot be the "Mother of God." God has no mother. She is only the mother of Jesus\' human nature.',
    kw: ['mother of god', 'theotokos', 'god has no mother', 'mary mother of jesus only', 'ina ng diyos', 'inahan sa dios'],
    a: `This title is really about JESUS, not Mary. Mothers give birth to persons, not to "natures." Jesus is one divine Person, the eternal Son of God, who took a human nature. Mary is the mother of that Person. So she is truly the Mother of God.

This does not mean Mary existed before God or gave Jesus his divinity. It means the baby in her arms was God.

The Council of Ephesus (431 AD) defined the title "Theotokos" (God-bearer) against Nestorius. Nestorius split Christ into two persons. Most Protestant Reformers, including Luther, used the title too.`,
    bible: [
      ['Luke 1:43', 'Elizabeth: "Why is this granted me, that the mother of my Lord should come to me?"'],
      ['Galatians 4:4', 'God sent forth his Son, born of a woman.'],
      ['Isaiah 7:14', 'The virgin shall conceive and bear a son, and shall call his name Emmanuel (God with us).'],
      ['John 1:1, 14', 'The Word was God… and the Word became flesh.'],
    ],
    ccc: [466, 495, 509],
    fathers: [
      ['St. Ignatius of Antioch', 'Letter to the Ephesians 18 (c. 107 AD)', '"For our God, Jesus the Christ, was conceived in the womb by Mary."'],
      ['St. Cyril of Alexandria', 'Third Letter to Nestorius (430 AD)', 'Summary: since the Word was united to flesh in her womb, the holy Virgin is Theotokos.'],
    ],
    docs: [
      ['Council of Ephesus (431 AD)', 'Defined that Mary is Theotokos, Mother of God.'],
    ],
    say: '"Is Jesus God? Then whose mother is Mary? The title protects the truth that Jesus is one Person, fully God and fully man."',
    rel: ['jesus-is-god', 'worship-mary'],
  },
  {
    id: 'immaculate-conception',
    cat: 'mary',
    legacy: 'immaculate conception',
    q: 'The Immaculate Conception is not in the Bible. "All have sinned" (Romans 3:23), so Mary was a sinner.',
    kw: ['immaculate conception', 'mary sinless', 'mary sinner', 'mary sinned', 'all have sinned', 'romans 3:23', 'god my savior', 'mary needed a savior', 'mary without sin', 'walang sala si maria', 'walay sala si maria'],
    a: `The Immaculate Conception means that from the first moment of her existence, Mary was preserved from original sin. This was by God's grace and by the future merits of Christ. It does not mean she did not need a Savior. She was saved in a more perfect way: preserved from falling, rather than lifted up after falling. That is why she rejoices in "God my Savior" (Luke 1:47).

"All have sinned" (Romans 3:23) is a general statement. It has exceptions: Jesus, and infants who have committed no personal sin. Paul's point is that Jews and Gentiles alike need grace.

The angel greets Mary as "kecharitomene," which means "full of grace" or "one who has been graced." It describes a lasting, completed state. The Old Testament Ark of the Covenant had to be pure because it held God's presence. Luke deliberately presents Mary as the new Ark (compare Luke 1:39-56 with 2 Samuel 6).`,
    bible: [
      ['Luke 1:28', '"Hail, full of grace" (kecharitomene): a perfected state of grace.'],
      ['Genesis 3:15', 'Enmity between the serpent and the woman.'],
      ['Luke 1:47', '"My spirit rejoices in God my Savior": Mary was saved by preservation.'],
      ['2 Samuel 6:9 & Luke 1:43', '"How can the ark of the Lord come to me?" and "Why is the mother of my Lord come to me?"'],
    ],
    ccc: [490, 491, 492, 493],
    fathers: [
      ['St. Ephrem the Syrian', 'Nisibene Hymns 27 (c. 370 AD)', '"You alone and your Mother are more beautiful than any others; for there is no blemish in you, nor any stains upon your Mother."'],
      ['St. Augustine', 'On Nature and Grace 36.42 (415 AD)', 'Summary: out of honor to the Lord, when it concerns sin, Mary must be excepted.'],
    ],
    docs: [
      ['Ineffabilis Deus (Pius IX, 1854)', 'Dogmatic definition of the Immaculate Conception.', 'https://www.papalencyclicals.net/pius09/p9ineff.htm'],
    ],
    say: '"Mary DID need a Savior. God saved her by keeping her from sin rather than cleaning her afterward. That is why she says \'God my Savior.\'"',
    rel: ['assumption', 'perpetual-virginity', 'mother-of-god'],
  },
  {
    id: 'assumption',
    cat: 'mary',
    legacy: 'assumption of mary',
    q: 'The Assumption of Mary into heaven is not in the Bible.',
    kw: ['assumption', 'assumption of mary', 'mary taken to heaven', 'mary body heaven', 'mary died', 'grave of mary', 'tomb of mary', 'dormition'],
    a: `The Assumption teaches that at the end of her earthly life, Mary was taken body and soul into heavenly glory. The definition deliberately leaves open whether she died first. Eastern Christians call this the "Dormition" or "falling asleep."

Being taken up to God is not unheard of in Scripture: Enoch and Elijah were taken up, and some saints rose at Christ's resurrection. Revelation 12 shows "a woman clothed with the sun." She gives birth to the male child who will rule the nations. She appears right after the Ark of the Covenant is seen in heaven (Revelation 11:19).

Christians in the early centuries venerated the relics and tombs of the apostles and martyrs. Yet no city ever claimed Mary's bones. The feast of the Dormition was being celebrated widely by the 6th century.`,
    bible: [
      ['Revelation 11:19–12:1', 'The ark is seen in heaven, then "a woman clothed with the sun… with a crown of twelve stars."'],
      ['Psalm 132:8', 'Arise, O Lord, into your resting place, you and the ark of your might.'],
      ['Genesis 5:24; 2 Kings 2:11', 'Enoch and Elijah taken up by God.'],
      ['1 Corinthians 15:20-23', 'Christ the first fruits, then those who belong to Christ: Mary is the first.'],
    ],
    ccc: [966, 974],
    fathers: [
      ['St. Gregory of Tours', 'Eight Books of Miracles 1.4 (c. 590 AD)', 'Summary: describes the Lord taking Mary\'s body to paradise after her death.'],
      ['St. John Damascene', 'Homilies on the Dormition (c. 740 AD)', 'Summary: preaches that she who kept her virginity in childbirth kept her body free from corruption after death.'],
    ],
    docs: [
      ['Munificentissimus Deus (Pius XII, 1950)', 'Dogmatic definition of the Assumption.', 'https://www.vatican.va/content/pius-xii/en/apost_constitutions/documents/hf_p-xii_apc_19501101_munificentissimus-deus.html'],
    ],
    say: '"God took Enoch and Elijah. Is it hard to believe he would take his own mother? And no early Christian city ever claimed to have her bones."',
    rel: ['immaculate-conception', 'queen-of-heaven'],
  },
  {
    id: 'perpetual-virginity',
    cat: 'mary',
    legacy: 'perpetual virginity',
    q: 'Mary had other children. The Bible mentions Jesus\' brothers and sisters.',
    kw: ['brothers of jesus', 'jesus brothers', 'jesus had brothers', 'brothers and sisters of jesus', 'mary other children', 'perpetual virginity', 'ever virgin', 'knew her not until', 'until she brought forth', 'firstborn son', 'mga igsoon ni hesus', 'kapatid ni hesus'],
    a: `In Hebrew and Aramaic, there was no separate word for "cousin," so "brother" (Greek "adelphos") covered close relatives. Lot is called Abraham's "brother," though he was his nephew (Genesis 14:14). Jacob is called Laban's "brother," though he was his nephew (Genesis 29:15).

James and Joses, two of the "brothers," are sons of ANOTHER Mary (Matthew 27:56; Mark 15:40). Jesus is never called "a son of Mary" alongside others. He is always "THE son of Mary" (Mark 6:3). From the cross, Jesus entrusted his mother to the Apostle John. That would make no sense if she had other living sons.

"He knew her not UNTIL she bore a son" (Matthew 1:25) says nothing about afterward. Compare 2 Samuel 6:23: Michal had no child "until" the day of her death. "Firstborn" was a legal title given to the child who opened the womb, even an only child (Exodus 13:2).

The Reformers themselves, including Luther and Zwingli, upheld Mary's perpetual virginity.`,
    bible: [
      ['Matthew 27:56', 'Mary the mother of James and Joseph: a different Mary.'],
      ['John 19:26-27', 'Jesus gives his mother to the beloved disciple.'],
      ['Genesis 14:14; 29:15', '"Brother" used for a nephew.'],
      ['2 Samuel 6:23', '"Until" does not imply a change afterward.'],
      ['Luke 1:34', '"How can this be, since I know not man?" — Mary\'s question.'],
    ],
    ccc: [496, 499, 500, 501, 510],
    fathers: [
      ['St. Jerome', 'Against Helvidius (383 AD)', 'Summary: refutes the claim that Mary had other children; the "brethren" are kinsmen.'],
      ['St. Athanasius', 'Discourses Against the Arians 2.70 (c. 358 AD)', 'Summary: calls Mary "Ever-Virgin."'],
    ],
    docs: [
      ['Lateran Council (649 AD)', 'Canon 3: Mary conceived without seed and remained a virgin after childbirth.'],
      ['Lumen Gentium (Vatican II, 1964)', 'Section 57.', LG],
    ],
    say: '"Matthew 27:56 tells us James and Joses were sons of another Mary. And Jesus gave his mother to John from the cross. Why, if she had other sons?"',
    rel: ['immaculate-conception', 'mother-of-god'],
  },
  {
    id: 'one-mediator',
    cat: 'mary',
    q: 'There is only one mediator between God and man, Jesus (1 Timothy 2:5). So we cannot go through Mary or the saints.',
    kw: ['one mediator', '1 timothy 2:5', 'only one mediator', 'go directly to god', 'go straight to jesus', 'why go through mary', 'mediatrix', 'intercessor', 'usa ra ka tigpataliwala', 'isang tagapamagitan'],
    a: `Catholics fully agree. Jesus is the one Mediator, the only one who reconciles God and man by his cross. But read the verses just before 1 Timothy 2:5. Paul urges Christians to make "supplications, prayers, intercessions" for everyone, because this "is good and pleasing to God."

Asking others to pray for us does not compete with Christ's mediation. It shares in it, because Christ wants his Body to love and pray for one another. If you ask your pastor to pray for you, you are not denying 1 Timothy 2:5. Asking Mary or the saints is the same thing. They are alive in Christ and close to God.`,
    bible: [
      ['1 Timothy 2:1-5', 'Pray and intercede for all, for there is one mediator, Christ Jesus.'],
      ['James 5:16', 'The prayer of a righteous person has great power.'],
      ['Romans 15:30', 'Paul: "Strive together with me in your prayers to God on my behalf."'],
      ['John 2:1-11', 'At Cana, Mary intercedes and Jesus works his first miracle.'],
    ],
    ccc: [970, 2634, 2635, 2636],
    fathers: [],
    docs: [
      ['Lumen Gentium (Vatican II, 1964)', 'Sections 60–62: Mary\'s role flows from Christ\'s mediation and depends entirely on it.', LG],
    ],
    say: '"Have you ever asked a friend to pray for you? That does not deny Christ as the one Mediator, and neither does asking Mary. Paul urges intercession right before 1 Tim 2:5."',
    rel: ['pray-to-saints', 'worship-mary'],
  },
  {
    id: 'pray-to-saints',
    cat: 'mary',
    legacy: 'pray to saints',
    q: 'Praying to dead saints is wrong. It is necromancy, and they cannot hear us.',
    kw: ['pray to saints', 'praying to saints', 'saints are dead', 'dead saints', 'talk to the dead', 'necromancy', 'saints cannot hear', 'intercession of saints', 'communion of saints', 'nag-ampo sa santos', 'nagdarasal sa santo'],
    a: `To "pray" originally meant simply "to ask." When Catholics pray to saints, we ask them to pray FOR us, just as we ask fellow Christians on earth.

The saints are not dead. "He is not God of the dead, but of the living; for all live to him." Hebrews describes them as a great "cloud of witnesses" surrounding us. In Revelation, the elders in heaven offer the prayers of the holy ones before God. So the saints in heaven know about, and present, prayers from earth.

Necromancy (Deuteronomy 18:10-11) means conjuring the spirits of the dead to get secret knowledge, as with a medium. Asking a saint to pray to God for you is completely different. It is the family of God helping one another.`,
    bible: [
      ['Luke 20:38', 'He is God not of the dead but of the living, for all live to him.'],
      ['Hebrews 12:1', 'We are surrounded by so great a cloud of witnesses.'],
      ['Revelation 5:8', 'The elders hold golden bowls of incense, which are the prayers of the saints.'],
      ['Revelation 8:3-4', 'The prayers of the saints rise before God from an angel\'s hand.'],
      ['Matthew 17:3', 'Moses and Elijah, long dead, appear and talk with Jesus.'],
    ],
    ccc: [956, 957, 2683],
    fathers: [
      ['Origen', 'On Prayer 11 (c. 233 AD)', 'Summary: the saints who have died join their prayers to ours.'],
      ['Early Christian inscriptions', 'Roman catacombs (2nd–3rd centuries)', 'Summary: epitaphs ask the departed to "pray for us."'],
    ],
    docs: [
      ['Lumen Gentium (Vatican II, 1964)', 'Sections 49–50: the communion of the pilgrim Church with the saints in heaven.', LG],
    ],
    say: '"I ask you to pray for me. Why couldn\'t I ask someone who is even closer to God? In Revelation 5:8 the saints in heaven offer our prayers to God."',
    rel: ['one-mediator', 'statues-idolatry', 'relics'],
  },
  {
    id: 'statues-idolatry',
    cat: 'mary',
    legacy: 'statues idolatry',
    q: 'Catholic statues and images are idols. God forbade graven images (Exodus 20:4).',
    kw: ['statues', 'statue', 'idol', 'idols', 'idolatry', 'graven image', 'graven images', 'exodus 20:4', 'bowing to statues', 'kneeling before statue', 'images', 'icons', 'rebulto', 'larawan', 'diyus-diyosan', 'sinasamba ang rebulto'],
    a: `God forbids making images to WORSHIP as gods. He does not forbid images. In the same book of Exodus, God commands Moses to make two golden cherubim for the Ark. He later commands a bronze serpent, and Solomon's Temple was full of carved angels, palm trees and flowers.

Catholics do not believe a statue is God or has power in itself. A statue is like a family photo: it reminds us of the person and draws our love to them. In the Old Testament God could not be pictured, because he had no visible form. But in Jesus, the invisible God became visible, so we may now depict him.

Bowing is not necessarily worship. Abraham bowed to the Hittites, and others bowed to kings, as a sign of respect.`,
    bible: [
      ['Exodus 25:18-22', 'God commands two golden cherubim on the Ark of the Covenant.'],
      ['Numbers 21:8-9', 'God commands a bronze serpent: those who look at it are healed.'],
      ['1 Kings 6:23-29', 'Carved cherubim and images throughout the Temple.'],
      ['Colossians 1:15', 'Christ is the image (eikon) of the invisible God.'],
      ['Genesis 23:7', 'Abraham bows before the Hittites as a gesture of respect.'],
    ],
    ccc: [1159, 1160, 1161, 1162, 2129, 2130, 2131, 2132],
    fathers: [
      ['St. Basil the Great', 'On the Holy Spirit 18.45 (c. 375 AD)', '"The honor paid to the image passes on to the prototype."'],
      ['St. John Damascene', 'On the Divine Images 1.16 (c. 730 AD)', 'Summary: I do not worship matter; I worship the Creator of matter who became matter for my sake.'],
    ],
    docs: [
      ['Second Council of Nicaea (787 AD)', 'Defined that images may be venerated, while true worship (latria) is for God alone.'],
    ],
    say: '"Do you have photos of your family? Do you worship them? God himself commanded statues of angels for the Ark (Exodus 25:18)."',
    rel: ['nazareno-devotion', 'relics', 'worship-mary'],
  },
  {
    id: 'nazareno-devotion',
    cat: 'practices',
    q: 'The Black Nazarene and Santo Niño devotions are idol worship and superstition.',
    kw: ['black nazarene', 'nazareno', 'santo nino', 'santo niño', 'sinulog', 'traslacion', 'quiapo', 'touching the statue', 'wiping the statue', 'popular devotion', 'panata', 'fiesta'],
    a: `Devotion to the Black Nazarene, the Santo Niño, and other images honors JESUS himself: his suffering, and his becoming a child for us. The image is not God. People touch it or wipe it with a towel the way the sick in the Gospels reached for the hem of Jesus' cloak. It is an act of faith in Christ, expressed with the body.

The Church supports popular piety, and she also purifies it. Treating an object as if it worked automatically, like a charm, is superstition, and the Catechism condemns it. The Vatican's Directory on Popular Piety teaches that devotions should lead people to the sacraments, to Scripture, and to a changed life.

So yes, abuses can happen. The answer to abuse is right use, not no use.`,
    bible: [
      ['Matthew 9:20-22', 'A woman touches the fringe of Jesus\' garment and is healed by her faith.'],
      ['Acts 19:11-12', 'Handkerchiefs touched to Paul brought healing.'],
      ['Mark 10:13-16', 'Jesus welcomes the little children — the heart of Santo Niño devotion.'],
    ],
    ccc: [1674, 1675, 1676, 2111],
    fathers: [],
    docs: [
      ['Directory on Popular Piety and the Liturgy (Vatican, 2001)', 'Guidance on how devotions should be nourished by Scripture and lead to the liturgy.', 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20020513_vers-directorio_en.html'],
    ],
    say: '"We don\'t worship the image. It reminds us of Jesus who suffered for us. Like the woman who touched Jesus\' cloak, devotees reach out in faith to Christ himself."',
    rel: ['statues-idolatry', 'sacramentals', 'relics'],
  },
  {
    id: 'relics',
    cat: 'mary',
    q: 'Venerating relics (bones of saints) is superstitious and unbiblical.',
    kw: ['relics', 'relic', 'bones of saints', 'saint bones', 'incorrupt', 'first class relic', 'reliquia'],
    a: `Scripture shows God working miracles through physical objects connected with his holy ones. A dead man came back to life when he touched Elisha's bones. Cloths touched to Paul healed the sick. People sought even Peter's shadow.

Christians have honored the remains of martyrs since the beginning. They did not treat them as magic. The martyrs' bodies were temples of the Holy Spirit and will rise again. Around 155 AD, the Church of Smyrna gathered St. Polycarp's bones as "more precious than costly stones." Many early altars were built over martyrs' tombs.`,
    bible: [
      ['2 Kings 13:20-21', 'A dead man touches Elisha\'s bones and comes back to life.'],
      ['Acts 19:11-12', 'Handkerchiefs and aprons that touched Paul cured the sick.'],
      ['Acts 5:15', 'The sick were laid where Peter\'s shadow might fall on them.'],
    ],
    ccc: [1674, 2111],
    fathers: [
      ['Martyrdom of Polycarp 18', '(c. 156 AD)', 'Summary: the Christians gathered his bones, "more precious than costly stones," and laid them in a fitting place to celebrate his martyrdom.'],
    ],
    docs: [],
    say: '"God raised a dead man through Elisha\'s bones (2 Kings 13:21). Honoring the remains of holy people is as old as the Bible."',
    rel: ['statues-idolatry', 'pray-to-saints'],
  },
  {
    id: 'queen-of-heaven',
    cat: 'mary',
    q: '"Queen of Heaven" is a pagan goddess condemned in Jeremiah 7:18.',
    kw: ['queen of heaven', 'jeremiah 7', 'jeremiah 44', 'queen mother', 'mary queen', 'reyna sa langit', 'reyna ng langit'],
    a: `Jeremiah condemns the worship of a pagan goddess (likely Ishtar or Astarte) that Israelites were offering cakes and incense to. Catholics give Mary no worship, no sacrifice and no divinity.

Mary's queenship comes from a completely different, biblical source: the Davidic kingdom. In Israel, the queen was not the king's wife. She was the king's MOTHER, the "gebirah" or great lady. She sat at his right hand and brought petitions to him (1 Kings 2:19-20). Jesus is the Son of David and King forever, so his mother is the Queen Mother. Revelation 12:1 shows her crowned with twelve stars.

A misused title does not make the true one wrong. Satan is called "god of this world" (2 Corinthians 4:4), yet God is still God.`,
    bible: [
      ['1 Kings 2:19-20', 'King Solomon rises, bows to his mother, and seats her at his right hand.'],
      ['Jeremiah 13:18', 'Say to the king and the queen mother…'],
      ['Luke 1:32-33', 'Jesus will receive the throne of David his father.'],
      ['Revelation 12:1', 'A woman clothed with the sun, with a crown of twelve stars.'],
    ],
    ccc: [966],
    fathers: [],
    docs: [
      ['Ad Caeli Reginam (Pius XII, 1954)', 'Encyclical on the Queenship of Mary.', 'https://www.vatican.va/content/pius-xii/en/encyclicals/documents/hf_p-xii_enc_11101954_ad-caeli-reginam.html'],
      ['Lumen Gentium (Vatican II, 1964)', 'Section 59.', LG],
    ],
    say: '"In David\'s kingdom, the king\'s mother was the queen (1 Kings 2:19). Jesus is the Son of David, so his mother is the Queen Mother, not a goddess."',
    rel: ['worship-mary', 'assumption'],
  },
  {
    id: 'apparitions',
    cat: 'mary',
    q: 'Catholics must believe in apparitions like Fatima and Lourdes, which add to the Bible.',
    kw: ['apparitions', 'apparition', 'fatima', 'lourdes', 'guadalupe', 'medjugorje', 'private revelation', 'visions of mary', 'miracle of the sun'],
    a: `No Catholic is required to believe in any apparition. Public Revelation ended with the death of the last apostle. Even approved apparitions are "private revelations." They add nothing to the faith. At most, they help people live the Gospel more fully in a certain time.

The Church is actually very cautious. Most claimed apparitions are never approved. Under the 2024 norms of the Dicastery for the Doctrine of the Faith, the Church usually gives a "nihil obstat" at most. That means nothing contrary to faith or morals was found and the devotion may be followed. It is not a declaration that the event was certainly supernatural.`,
    bible: [
      ['1 Thessalonians 5:19-21', 'Do not despise prophecies, but test everything; hold fast what is good.'],
      ['Jude 3', 'The faith was once for all delivered to the saints.'],
    ],
    ccc: [66, 67],
    fathers: [],
    docs: [
      ['Dicastery for the Doctrine of the Faith (2024)', 'Norms for proceeding in the discernment of alleged supernatural phenomena.'],
    ],
    say: '"Apparitions are never required belief. The Church tests them strictly, and they can only point back to the Gospel."',
    rel: ['worship-mary', 'sola-scriptura'],
  },
]
