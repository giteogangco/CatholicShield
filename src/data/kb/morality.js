/** Knowledge base — Morality & Life. Entry shape: see scripture.js */

const EV = 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_25031995_evangelium-vitae.html'

export default [
  {
    id: 'contraception',
    cat: 'morality',
    q: 'The Church\'s ban on contraception is outdated and unbiblical.',
    kw: ['contraception', 'birth control', 'condoms', 'the pill', 'humanae vitae', 'family planning', 'nfp', 'natural family planning', 'onan', 'kontrasepsyon', 'pagpugong sa pagpanganak'],
    a: `Until 1930, every Christian denomination taught that contraception is wrong. That year, the Anglican Lambeth Conference became the first to allow it in limited cases. The Catholic Church has kept the historic Christian teaching.

The reason is that married love, by its nature, is both unitive (it unites the spouses) and procreative (it is open to life). Deliberately making a sexual act sterile separates what God joined together. The Church does NOT require couples to have as many children as possible. For serious reasons, they may space births by abstaining during fertile periods (Natural Family Planning). That method works with the body's design instead of against it.

Paul VI predicted in Humanae Vitae (1968) that widespread contraception would lead to more infidelity and a general lowering of moral standards. He also predicted that women would be treated as objects, and that governments would use it coercively. Many observers, including non-Catholics, say these predictions came true.`,
    bible: [
      ['Genesis 1:28', 'Be fruitful and multiply.'],
      ['Genesis 38:8-10', 'Onan "spilled his seed on the ground," and what he did displeased the Lord.'],
      ['Psalm 127:3-5', 'Children are a heritage from the Lord.'],
      ['Matthew 19:4-6', 'The two become one flesh; what God has joined, let no man separate.'],
    ],
    ccc: [2366, 2367, 2368, 2369, 2370, 2399],
    fathers: [
      ['St. Augustine', 'Marriage and Concupiscence 1.15.17 (c. 419 AD)', 'Summary: condemns married couples who use "poisons of sterility" to prevent conception.'],
    ],
    docs: [
      ['Humanae Vitae (Paul VI, 1968)', 'Sections 11–17: the unitive and procreative meaning; NFP; foreseen consequences.', 'https://www.vatican.va/content/paul-vi/en/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html'],
    ],
    say: '"Every Christian church opposed contraception until 1930. The Church allows couples to plan their families naturally, respecting the way God designed love and life together."',
    rel: ['abortion', 'annulment'],
  },
  {
    id: 'abortion',
    cat: 'morality',
    q: 'Abortion is a woman\'s right. The Bible does not say life begins at conception.',
    kw: ['abortion', 'pro choice', 'pro-choice', 'pro life', 'unborn', 'fetus', 'when does life begin', 'my body my choice', 'aborsyon', 'pagpapalaglag'],
    a: `Embryology shows that a new, distinct, living human organism begins at fertilization, with its own DNA. The question is not whether the unborn child is human and alive. It is whether every human life has equal dignity. The Church says yes: the weak, small and unwanted included.

Scripture shows God knowing and forming persons in the womb. John the Baptist "leaped for joy" in Elizabeth's womb at the presence of the unborn Jesus. From the 1st century, Christians condemned abortion explicitly. This set them apart from the pagan world.

The Church is also deeply compassionate toward women in crisis and toward those who have had abortions. Mercy and forgiveness are always available. Programs like Project Rachel offer healing. Defending the child and loving the mother go together.`,
    bible: [
      ['Jeremiah 1:5', 'Before I formed you in the womb I knew you.'],
      ['Psalm 139:13-16', 'You knit me together in my mother\'s womb.'],
      ['Luke 1:41-44', 'The babe leaped in my womb for joy.'],
      ['Exodus 20:13', 'You shall not kill.'],
    ],
    ccc: [2270, 2271, 2272, 2273, 2274],
    fathers: [
      ['Didache 2.2', '(c. 70–100 AD)', '"You shall not murder a child by abortion nor kill that which is born."'],
      ['Letter to Diognetus 5', '(c. 130 AD)', 'Summary: Christians marry and have children like everyone else, but they do not destroy their offspring.'],
    ],
    docs: [
      ['Evangelium Vitae (John Paul II, 1995)', 'Sections 58–62 on abortion; section 99 on healing for women who have had abortions.', EV],
    ],
    say: '"Science says a new human life begins at conception. The Church defends both lives: the child\'s, and the mother\'s, who deserves real support and mercy."',
    rel: ['euthanasia', 'contraception'],
  },
  {
    id: 'homosexuality',
    cat: 'morality',
    q: 'The Church hates gay people. Its teaching on homosexuality is bigotry.',
    kw: ['homosexual', 'homosexuality', 'gay', 'lesbian', 'lgbt', 'same sex', 'same-sex marriage', 'gay marriage', 'bakla', 'tomboy'],
    a: `The Church does not hate anyone. The Catechism says persons with same-sex attraction "must be accepted with respect, compassion, and sensitivity. Every sign of unjust discrimination in their regard should be avoided." Every person is loved by God and made in his image. That dignity does not depend on their attractions.

The Church's teaching is about ACTIONS, not about who people are. She teaches that sexual intimacy belongs within the marriage of one man and one woman. That union reflects God's design ("male and female he created them… the two shall become one flesh") and is open to new life. This standard applies to EVERYONE. Unmarried heterosexual people are also called to chastity.

Many Catholics with same-sex attraction live faithful, chaste lives with deep friendships, supported by groups like Courage. Speak about this topic with great gentleness. It concerns real people we love.`,
    bible: [
      ['Genesis 1:27; 2:24', 'Male and female he created them… the two become one flesh.'],
      ['Matthew 19:4-6', 'Jesus reaffirms the design of marriage "from the beginning."'],
      ['Romans 1:26-27; 1 Corinthians 6:9-11', 'Paul names same-sex acts among sins, then: "such were some of you, but you were washed."'],
    ],
    ccc: [2331, 2333, 2357, 2358, 2359],
    fathers: [],
    docs: [
      ['Persona Humana (CDF, 1975)', 'Section 8.'],
    ],
    say: '"The Church calls everyone, gay or straight, to chastity, and asks that every person be treated with respect and compassion. It\'s about God\'s design for marriage, not hatred."',
    rel: ['contraception', 'annulment'],
  },
  {
    id: 'euthanasia',
    cat: 'morality',
    q: 'Euthanasia is mercy. People should have the right to die with dignity.',
    kw: ['euthanasia', 'assisted suicide', 'right to die', 'mercy killing', 'die with dignity', 'end of life', 'life support', 'suicide'],
    a: `Human life is a gift from God, and it keeps its dignity in sickness, disability and old age. Directly and intentionally killing a sick or dying person, even out of compassion, is morally unacceptable.

The Church does NOT require keeping someone alive at all costs. Patients may refuse "extraordinary" or disproportionate treatments that are overly burdensome or futile. They may also receive strong pain medication, even if it might shorten life as a side effect, when the intention is to relieve pain. Palliative care and hospice are true "death with dignity."

People who die by suicide are entrusted to God's mercy. The Church prays for them. Grave psychological suffering can lessen a person's responsibility.`,
    bible: [
      ['Deuteronomy 32:39', 'I kill and I make alive… there is none that can deliver out of my hand.'],
      ['Exodus 20:13', 'You shall not kill.'],
      ['2 Corinthians 4:16-17', 'Though our outer nature is wasting away, our inner nature is being renewed every day.'],
    ],
    ccc: [2276, 2277, 2278, 2279, 2280, 2282, 2283],
    fathers: [],
    docs: [
      ['Evangelium Vitae (John Paul II, 1995)', 'Sections 64–67.', EV],
      ['Samaritanus Bonus (CDF, 2020)', 'On the care of persons in the critical and terminal phases of life.'],
    ],
    say: '"Real compassion stays with the suffering. The Church supports pain relief and hospice, and refusing excessive treatment, but never deliberately ending a life."',
    rel: ['abortion', 'death-penalty'],
  },
  {
    id: 'death-penalty',
    cat: 'morality',
    q: 'The Catholic Church contradicts itself on the death penalty.',
    kw: ['death penalty', 'capital punishment', 'execution', 'church changed teaching', 'catechism 2267', 'parusang kamatayan'],
    a: `In 2018, Pope Francis revised paragraph 2267 of the Catechism. It now says that "in the light of the Gospel," the death penalty is "inadmissible because it is an attack on the inviolability and dignity of the person." The Church works for its abolition worldwide.

This builds on John Paul II's teaching in Evangelium Vitae (1995). He said modern societies have other ways to protect the public, so cases where execution is absolutely necessary are "very rare, if not practically non-existent." The Church's development emphasizes that even a guilty person never loses his God-given dignity, and that there is always the possibility of conversion.

Discussing how this teaching relates to earlier Church statements is legitimate. Scripture itself shows mercy coming to the fore in Christ: think of the woman caught in adultery, whom the Law would have stoned (John 8:3-11).`,
    bible: [
      ['Genesis 4:15', 'God puts a mark on Cain so that no one would kill him.'],
      ['John 8:3-11', 'Jesus spares the woman the Law would have stoned.'],
      ['Ezekiel 33:11', 'I have no pleasure in the death of the wicked, but that he turn and live.'],
    ],
    ccc: [2263, 2265, 2266, 2267],
    fathers: [],
    docs: [
      ['Evangelium Vitae (John Paul II, 1995)', 'Section 56.', EV],
    ],
    say: '"The Church teaches that even a guilty person keeps the dignity God gave him. Today\'s societies can protect people without killing. That\'s why the Catechism calls the death penalty inadmissible."',
    rel: ['euthanasia', 'abortion'],
  },
  {
    id: 'cremation',
    cat: 'morality',
    q: 'Catholics forbid cremation. Or Catholics can do anything with the ashes.',
    kw: ['cremation', 'cremate', 'ashes of the dead', 'scatter ashes', 'keep ashes at home', 'burial', 'cremated', 'abo sa patay'],
    a: `The Church has permitted cremation since 1963, as long as it is not chosen to deny faith in the resurrection of the body. She still prefers burial, which follows the example of Jesus' own burial and expresses hope in the resurrection.

The ashes should be treated with the same respect as a body. They should be kept in a sacred place, such as a cemetery or columbarium. They should not be scattered, divided among relatives, made into jewelry, or kept at home. These are the guidelines of the Vatican's instruction Ad Resurgendum cum Christo (2016). The reason is not that God can't raise ashes. It is that the body was a temple of the Holy Spirit and deserves reverence.`,
    bible: [
      ['1 Corinthians 6:19', 'Your body is a temple of the Holy Spirit.'],
      ['John 19:40-42', 'Jesus\' body is wrapped and laid in a tomb.'],
      ['1 Corinthians 15:42-44', 'Sown perishable, raised imperishable.'],
    ],
    ccc: [2300, 2301],
    fathers: [],
    docs: [
      ['Ad Resurgendum cum Christo (CDF, 2016)', 'Instruction on burial and the conservation of ashes after cremation.', 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20160815_ad-resurgendum-cum-christo_en.html'],
    ],
    say: '"Cremation is allowed, but the ashes deserve the same respect as the body. We keep them in a sacred place, because we believe in the resurrection."',
    rel: ['pray-for-dead'],
  },
]
