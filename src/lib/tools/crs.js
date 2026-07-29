/* ==========================================================================
   Express Entry - Comprehensive Ranking System
   Ported verbatim from the verified vanilla build. Pure functions only, no DOM,
   so the same module is testable on its own and reusable server side.

   Sources: IRCC CRS criteria and the official language test equivalency charts.
   Job offer points are zero, removed by IRCC on 25 March 2025.
   ========================================================================== */

export const LANG = {
  celpip:{lang:"en",label:"CELPIP-General",min:1,max:12,step:1,
    t:{R:{10:10,9:9,8:8,7:7,6:6,5:5,4:4},W:{10:10,9:9,8:8,7:7,6:6,5:5,4:4},
       L:{10:10,9:9,8:8,7:7,6:6,5:5,4:4},S:{10:10,9:9,8:8,7:7,6:6,5:5,4:4}}},
  ielts:{lang:"en",label:"IELTS General Training",min:0,max:9,step:0.5,
    t:{R:{10:8.0,9:7.0,8:6.5,7:6.0,6:5.0,5:4.0,4:3.5},
       W:{10:7.5,9:7.0,8:6.5,7:6.0,6:5.5,5:5.0,4:4.0},
       L:{10:8.5,9:8.0,8:7.5,7:6.0,6:5.5,5:5.0,4:4.5},
       S:{10:7.5,9:7.0,8:6.5,7:6.0,6:5.5,5:5.0,4:4.0}}},
  pte:{lang:"en",label:"PTE Core",min:10,max:90,step:1,
    t:{R:{10:88,9:78,8:69,7:60,6:51,5:42,4:33},
       W:{10:90,9:88,8:79,7:69,6:60,5:51,4:41},
       L:{10:89,9:82,8:71,7:60,6:50,5:39,4:28},
       S:{10:89,9:84,8:76,7:68,6:59,5:51,4:42}}},
  tcf:{lang:"fr",label:"TCF Canada",
    ranges:{R:[0,699],W:[0,20],L:[0,699],S:[0,20]},
    t:{R:{10:549,9:524,8:499,7:453,6:406,5:375,4:342},
       W:{10:16,9:14,8:12,7:10,6:7,5:6,4:4},
       L:{10:549,9:523,8:503,7:458,6:398,5:369,4:331},
       S:{10:16,9:14,8:12,7:10,6:7,5:6,4:4}}},
  tef:{lang:"fr",label:"TEF Canada",charts:{
    old:{ranges:{R:[0,300],W:[0,450],L:[0,360],S:[0,450]},
      t:{R:{10:263,9:248,8:233,7:207,6:181,5:151,4:121},
         W:{10:393,9:371,8:349,7:310,6:271,5:226,4:181},
         L:{10:316,9:298,8:280,7:249,6:217,5:181,4:145},
         S:{10:393,9:371,8:349,7:310,6:271,5:226,4:181}}},
    "new":{ranges:{R:[0,699],W:[0,699],L:[0,699],S:[0,699]},
      t:{R:{10:546,9:503,8:462,7:434,6:393,5:352,4:306},
         W:{10:558,9:512,8:472,7:428,6:379,5:330,4:268},
         L:{10:546,9:503,8:462,7:434,6:393,5:352,4:306},
         S:{10:556,9:518,8:494,7:456,6:422,5:387,4:328}}},
    mid:{ranges:{R:[0,699],W:[0,699],L:[0,699],S:[0,699]},
      t:{R:{10:566,9:533,8:500,7:450,6:400,5:350,4:300},
         W:{10:566,9:533,8:500,7:450,6:400,5:350,4:300},
         L:{10:566,9:533,8:500,7:450,6:400,5:350,4:300},
         S:{10:566,9:533,8:500,7:450,6:400,5:350,4:300}}}
  }}
};

export function tableFor(test, chart, ability){
  var d = LANG[test];
  if(!d) return null;
  if(d.charts) return d.charts[chart || "old"].t[ability];
  return d.t[ability];
}
export function toCLB(test, chart, ability, raw){
  if(raw === "" || raw === null || raw === undefined || isNaN(raw)) return null;
  var t = tableFor(test, chart, ability);
  if(!t) return null;
  var v = Number(raw);
  for(var lvl = 10; lvl >= 4; lvl--){ if(v >= t[lvl]) return lvl; }
  return 0;
}

/* ===================== CRS point tables ===================== */
export const AGE = {17:[0,0],18:[90,99],19:[95,105],20:[100,110],30:[95,105],31:[90,99],32:[85,94],
  33:[80,88],34:[75,83],35:[70,77],36:[65,72],37:[60,66],38:[55,61],39:[50,55],
  40:[45,50],41:[35,39],42:[25,28],43:[15,17],44:[5,6],45:[0,0]};
export function agePoints(age, spouse){
  var k;
  if(age <= 17) k = 17; else if(age >= 45) k = 45;
  else if(age >= 20 && age <= 29) k = 20; else k = age;
  return AGE[k][spouse ? 0 : 1];
}
export const EDU = {none:[0,0],secondary:[28,30],oneYear:[84,90],twoYear:[91,98],
  bachelor:[112,120],twoOrMore:[119,128],masters:[126,135],phd:[140,150]};
export const SP_EDU = {none:0,secondary:2,oneYear:6,twoYear:7,bachelor:8,twoOrMore:9,masters:10,phd:10};
export const CWE = {0:[0,0],1:[35,40],2:[46,53],3:[56,64],4:[63,72],5:[70,80]};
export const SP_CWE = {0:0,1:5,2:7,3:8,4:9,5:10};

export function firstLangAbility(clb, spouse){
  if(clb === null || clb < 4) return 0;
  if(clb <= 5) return 6;
  if(clb === 6) return spouse ? 8 : 9;
  if(clb === 7) return spouse ? 16 : 17;
  if(clb === 8) return spouse ? 22 : 23;
  if(clb === 9) return spouse ? 29 : 31;
  return spouse ? 32 : 34;
}
export function secondLangAbility(clb){
  if(clb === null || clb <= 4) return 0;
  if(clb <= 6) return 1;
  if(clb <= 8) return 3;
  return 6;
}
export function spouseLangAbility(clb){
  if(clb === null || clb <= 4) return 0;
  if(clb <= 6) return 1;
  if(clb <= 8) return 3;
  return 5;
}
export function eduTier(edu){
  if(edu === "none" || edu === "secondary") return 0;
  if(edu === "twoOrMore" || edu === "masters" || edu === "phd") return 2;
  return 1;
}
export function tierPoints(tier, high){
  if(tier === 0) return 0;
  if(tier === 1) return high ? 25 : 13;
  return high ? 50 : 25;
}
export function fweTier(years){ if(years <= 0) return 0; return years >= 3 ? 2 : 1; }

export function computeCRS(a){
  var spouse = a.hasSpouse;
  var minFirst = Math.min.apply(null, a.first);
  var out = {};

  out.age = agePoints(a.age, spouse);
  out.education = EDU[a.education][spouse ? 0 : 1];
  out.firstLang = 0;
  for(var i = 0; i < 4; i++) out.firstLang += firstLangAbility(a.first[i], spouse);
  out.secondLang = 0;
  if(a.second){
    for(var j = 0; j < 4; j++) out.secondLang += secondLangAbility(a.second[j]);
    out.secondLang = Math.min(out.secondLang, spouse ? 22 : 24);
  }
  out.canWork = CWE[a.canWork][spouse ? 0 : 1];
  out.core = out.age + out.education + out.firstLang + out.secondLang + out.canWork;

  out.spEdu = 0; out.spLang = 0; out.spWork = 0;
  if(spouse){
    out.spEdu = SP_EDU[a.spEdu];
    if(a.spLang){
      for(var k = 0; k < 4; k++) out.spLang += spouseLangAbility(a.spLang[k]);
      out.spLang = Math.min(out.spLang, 20);
    }
    out.spWork = SP_CWE[a.spWork];
  }
  out.spouse = out.spEdu + out.spLang + out.spWork;

  var langHigh = minFirst >= 9, langMid = minFirst >= 7;
  var et = eduTier(a.education);
  var eduLang = langHigh ? tierPoints(et, true) : (langMid ? tierPoints(et, false) : 0);
  var eduWork = a.canWork >= 2 ? tierPoints(et, true) : (a.canWork === 1 ? tierPoints(et, false) : 0);
  out.stEducation = Math.min(eduLang + eduWork, 50);

  var ft = fweTier(a.forWork);
  var fweLang = langHigh ? tierPoints(ft, true) : (langMid ? tierPoints(ft, false) : 0);
  var fweWork = a.canWork >= 2 ? tierPoints(ft, true) : (a.canWork === 1 ? tierPoints(ft, false) : 0);
  out.stForeign = Math.min(fweLang + fweWork, 50);

  out.stCert = 0;
  if(a.cert) out.stCert = minFirst >= 7 ? 50 : (minFirst >= 5 ? 25 : 0);
  out.transfer = Math.min(out.stEducation + out.stForeign + out.stCert, 100);

  out.sibling = a.sibling ? 15 : 0;
  out.canEdu = a.canEdu === "long" ? 30 : (a.canEdu === "short" ? 15 : 0);
  out.pnp = a.pnp ? 600 : 0;
  out.jobOffer = 0;

  out.french = 0;
  var fr = a.frenchCLB, en = a.englishCLB;
  if(fr && Math.min.apply(null, fr) >= 7){
    if(!en || Math.min.apply(null, en) <= 4) out.french = 25;
    else out.french = 50;
  }
  out.additional = out.sibling + out.canEdu + out.pnp + out.french;

  out.total = Math.min(out.core + out.spouse + out.transfer + out.additional, 1200);
  return out;
}

/* --------------------------------------------------------------------------
   Draw benchmarks. UPDATE AFTER EACH ROUND OF INVITATIONS.
   These two numbers drive the score bar marker and the verdict line.
   -------------------------------------------------------------------------- */
export const CEC_CUT = 516;   // lowest score invited, latest CEC round
export const PNP_CUT = 744;   // lowest score invited, latest PNP round
export const CRS_MAX = 1200;

export const ABILITIES = [
  ['S', 'Speaking'], ['L', 'Listening'], ['R', 'Reading'], ['W', 'Writing'],
];

/** Valid raw-score range for a test/ability, used for the input bounds. */
export function rangeFor(test, chart, ability) {
  const d = LANG[test];
  if (d.charts) return d.charts[chart || 'old'].ranges[ability];
  if (d.ranges) return d.ranges[ability];
  return [d.min, d.max];
}

export function stepFor(test) {
  return LANG[test].step ? LANG[test].step : 1;
}

/** Tests for the other official language, so the two can never be the same. */
export function secondLanguageTests(firstTest) {
  const lang = LANG[firstTest].lang;
  return Object.entries(LANG)
    .filter(([, d]) => d.lang !== lang)
    .map(([k, d]) => ({ v: k, t: d.label }));
}

/**
 * Point gains recalculated by re-running the full scorer with one thing changed,
 * so every number shown is a real delta rather than an estimate.
 */
export function levers(input, base) {
  const list = [];
  const clone = (o) => ({ ...o, first: [...o.first] });
  const minFirst = Math.min(...input.first);
  const push = (m, text) => {
    const gain = computeCRS(m).total - base;
    if (gain > 0) list.push({ pts: gain, text });
  };

  if (minFirst < 9) {
    const m = clone(input); m.first = [9, 9, 9, 9];
    if (input.firstIsFrench) m.frenchCLB = [9, 9, 9, 9]; else m.englishCLB = [9, 9, 9, 9];
    push(m, 'Reach CLB 9 in all four abilities of your first language.');
  }
  if (minFirst >= 7 && minFirst < 10) {
    const m = clone(input); m.first = [10, 10, 10, 10];
    if (input.firstIsFrench) m.frenchCLB = [10, 10, 10, 10]; else m.englishCLB = [10, 10, 10, 10];
    push(m, 'Reach CLB 10 in all four abilities of your first language.');
  }
  if (!input.frenchCLB || Math.min(...input.frenchCLB) < 7) {
    const m = clone(input); m.frenchCLB = [7, 7, 7, 7];
    if (input.firstIsFrench) m.first = [7, 7, 7, 7]; else m.second = [7, 7, 7, 7];
    push(m, 'Score NCLC 7 in all four French abilities on TEF or TCF Canada.');
  }
  if (input.canWork < 5) {
    const m = clone(input); m.canWork = input.canWork + 1;
    push(m, 'Add one more year of skilled Canadian work experience.');
  }
  if (input.education !== 'phd' && input.education !== 'masters') {
    const m = clone(input); m.education = 'masters';
    push(m, "Complete a master's degree, or get an ECA for one you already hold.");
  }
  if (!input.sibling) {
    const m = clone(input); m.sibling = true;
    push(m, 'Declare a sibling in Canada who is a citizen or permanent resident.');
  }

  list.sort((a, b) => b.pts - a.pts);
  return list.slice(0, 3);
}
