import { IGoodSkuProps } from './index';

export const goodSkuDataSource: IGoodSkuProps = {
  margin: '10px',
  materielsGroup: {
    '1': [
      {
        id: '1',
        name: 'materiel 1',
      },
      {
        id: '2',
        name: 'materiel 2',
      },
    ],
  },
  skusGroup: {
    '2': [
      {
        id: '1',
        standard: 'SKU 1',
      },
      {
        id: '2',
        standard: 'SKU 2',
      },
    ],
  },
  selectSkusGroup: {
    '2': ['1'],
  },
  selectMaterielsGroup: {
    '1': ['2'],
  },
};
