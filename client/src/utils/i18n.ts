import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  English: {
    translation: {
      home: 'Home',
      guide: 'User Guide',
      korea: 'Korea',
      title:
        'Proactively Identify and Systematically Respond to Security Threats',
      subTitle:
        'Start with a comprehensive security assessment based on a single JSON file. We will analyze threats based on MITRE and NIST criteria to identify security vulnerabilities and provide you with a structured plan for addressing them.',
      benefitFirstTitle:
        'Easy Security and Stability Assessment for Your Systems 👋',
      benefitFirstContent:
        'We help you identify and respond to threats based on the MITRE framework and NIST 800-53, making it easy to ensure the security and stability of your systems.',
      benefitSecondTitle:
        'Effortless Analysis with Just an Attack Flow JSON File 👌',
      benefitSecondContent:
        "Upload your Attack Flow JSON file and we'll automatically map it to ATT&CK IDs, Control IDs, Mitigation IDs, D3FEND IDs, CVEs, and more, all with just a single upload.",
      benefitThirdTitle: 'Detailed Security Analysis Based on Provided Data 🧐',
      benefitThirdContent:
        'Download the mapped data and analysis results to leverage them for security checks and gain a comprehensive understanding of your security posture.',
      fileUploadDescription:
        'Drag and drop your Attack Flow JSON file here or click to upload.',
      or: 'or',
      fileUploadButton: 'Choose a file to upload',
      fileDragAndDrop: 'File is recognized, drop it now!',
      termsOfUse: 'Terms of Use',
      privacyPolicy: 'Privacy Policy',
      changelog: 'Changelog',
      download: 'Download',
      fileUploadError: 'We received an invalid file, please try again.',
      fileUploadSuccess:
        'We received the file successfully! Let us analyze it.',
      fileUploadReadError:
        'An error occurred while converting the file to JSON.',
      fileUploadTermsError:
        'You must accept the Terms of Use to use the service.',
      loading: '🔎 Analyzing Attack Flow...',
      report: 'Threat Modeling Report',
      agreeInformation:
        'You have the right to refuse consent to the terms and conditions above. If consent is not given, access to the service will be restricted.',
      agreeQuestion: 'Do you agree to the terms and conditions?',
      agree: 'Agree',
      cancel: 'Cancel',
    },
  },
  Korea: {
    translation: {
      home: '홈',
      guide: '사용자 가이드',
      korea: '한국어',
      title: '보안 위협을 미리 파악하고 체계적으로 대응해 보세요',
      subTitle:
        '단 한 개의 JSON 파일로 시작되는 철저한 보안 진단. MITRE와 NIST 기준에 따른 위협 분석을 통해 보안 취약성과 대응 방안을 정리하여 알려드릴게요.',
      benefitFirstTitle: '시스템의 보안과 안정성을 쉽게 평가하세요 👋',
      benefitFirstContent:
        'MITRE 프레임워크와 NIST 800-53을 바탕으로 위협 분석 및 대응하는 데 도움을 드릴게요.',
      benefitSecondTitle: 'Attack Flow JSON 파일 하나만 있으면 됩니다! 👌',
      benefitSecondContent:
        '파일 업로드 한 번으로 ATT&CK ID와 관련된 Control ID, Mitigation ID, D3FEND ID, CVE 등을 자동으로 매핑해드려요.',
      benefitThirdTitle:
        '제공된 데이터를 기반으로 상세한 보안 분석을 제공해드려요 🧐',
      benefitThirdContent:
        '매핑된 데이터와 분석 결과를 다운로드하여 보안 점검에 활용하고 보안 포지션에 대한 포괄적인 이해를 얻을 수 있어요.',
      fileUploadDescription:
        'Attack Flow JSON 파일을 여기로 끌어다 놓아주세요.',
      or: '또는',
      fileUploadButton: '업로드 파일 선택하기',
      fileDragAndDrop: '파일이 인식됐어요, 지금 놓으시면 돼요!',
      termsOfUse: '이용약관',
      privacyPolicy: '개인정보처리방침',
      changelog: '변경내역',
      download: '다운로드',
      fileUploadError: '올바르지 않는 파일을 받았어요, 다시 시도해 주세요.',
      fileUploadSuccess: '정상적으로 파일을 받았어요! 분석을 해볼게요.',
      fileUploadReadError: '파일을 JSON으로 변환하는 중 오류가 발생했습니다.',
      fileUploadTermsError: '이용약관에 동의해야 서비스 이용이 가능합니다.',
      loading: '🔎 Attack Flow를 분석중입니다...',
      report: '위협 모델링 보고서',
      agreeInformation:
        '위 이용약관에 대한 동의를 거부할 권리가 있으며, 동의 거부시에는 해당 서비스 이용이 제한됩니다.',
      agreeQuestion: '이용 약관에 동의하십니까?',
      agree: '동의',
      cancel: '취소',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'English',
});

export default i18n;
