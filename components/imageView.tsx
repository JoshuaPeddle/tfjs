import dynamic from 'next/dynamic';
import styles from './imageView.module.css';
const Image = dynamic(() => import('next/image'));
export default function ImageView({ image, result, loading, size }: { image: string | null, result: string | null, loading: boolean, size: [number, number] }) {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.images}>
        <Image placeholder="blur" blurDataURL={'/blank-dark.png'} priority={true} id='src_img' src={image? image :'/loader-dark.gif'} width={size[0]} height={size[1]} quality={85} alt="" loader={({ src }) => {
          return src;
        }} unoptimized />
        {result ? <Image placeholder="blur" blurDataURL={'/blank-dark.png'} id='res_img' src={result} width={size[0]} height={size[1]} alt="" quality={85} /> :
          <Image placeholder="blur" blurDataURL={'/blank-dark.png'} id='res_img' src={loading? '/loader-dark.gif' : '/blank-dark.png'} width={size[0]} height={size[1]} alt="" quality={85} />}
      </div>
    </div>
  );
}  