import NextLink from "next/link";
import styled from "styled-components";

export default function NotFound() {
  return (
    <div>
      <div
        display='inline-block'
        as='h2'
        size='2xl'
        bgGradient='linear(to-r, teal.400, teal.600)'
        backgroundClip='text'
      >
        404
      </div>
      <p fontSize='18px' mt={3} mb={2}>
        Sayfa Bulunamadı
      </p>
      <p color={"gray.500"} mb={6}>
        Böyle bir sayfa bulunmamaktadır.
      </p>

      <button
        colorScheme='teal'
        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
        color='white'
        variant='solid'
      >
        <Link as={NextLink} href='/'>
          Menü'ye Geri Dön
        </Link>
      </button>
    </div>
  );
}

const Link = styled(NextLink)``;
