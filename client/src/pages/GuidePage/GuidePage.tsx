import { NOTION } from '@constants/api';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BlockMapType, NotionRenderer } from 'react-notion';

const GuidePage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<BlockMapType>({});

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION.GUIDE}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="my-4">
      <h1 className="mb-4 text-3xl font-bold">{t('guide')}</h1>
      <NotionRenderer blockMap={data} />
    </div>
  );
};

export default GuidePage;
