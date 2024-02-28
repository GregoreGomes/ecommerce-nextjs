import { getStorage, ref as storageRef } from 'firebase/storage';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { storage } from '@/firebase/firebase';
import Image from 'next/image';

interface DownloadPropos {
  nameFile: string;
}

export const DownloadFile = ( { nameFile }: DownloadPropos ) => {

  const [value, loading, error] = useDownloadURL(storageRef(storage, `produtos/${nameFile}`));

  return (
    <div>
      <p>
        {error && <strong>Produto sem imagem</strong>}
        {loading && <span>Download...</span>}
        {!loading && value && (
          <Image src={value} width={100} height={100} alt={value} />
        )}
      </p>
    </div>
  );
};