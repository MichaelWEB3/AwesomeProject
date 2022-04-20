import React from 'react';
import { Text, View } from 'react-native'
import * as S from "./style";



export default function Production() {
  return (
    <S.Body>
      <S.ProductionItem>
        <S.ImgITem resizeMode="center" source={{ uri: `https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png` }}></S.ImgITem>
      </S.ProductionItem>
      <S.ProductionItem>
        <S.ImgITem resizeMode="center" source={{ uri: `https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=400&aspectRatio=1.78&format=png` }}></S.ImgITem>
      </S.ProductionItem>
      <S.ProductionItem>
        <S.ImgITem source={{ uri: `https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=400&aspectRatio=1.78&format=png` }}></S.ImgITem>
      </S.ProductionItem>
      <S.ProductionItem>
        <S.ImgITem resizeMode="center" source={{ uri: `https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png` }}></S.ImgITem>
      </S.ProductionItem>
      <S.ProductionItem>
        <S.ImgITem resizeMode="center" source={{ uri: `https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=400&aspectRatio=1.78&format=png` }}></S.ImgITem>
      </S.ProductionItem>
    </S.Body>
  );
}