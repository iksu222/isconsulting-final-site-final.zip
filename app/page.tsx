'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <header className="bg-gray-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">IS컨설팅</h1>
        <p className="mt-2">신뢰를 바탕으로 한 대출 컨설팅</p>
      </header>

      <section className="p-8">
        <Image src="/banner.png" alt="배너 이미지" width={1000} height={300} className="mx-auto rounded-lg shadow" />
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">대출상품 안내</h2>
        <ul className="space-y-2">
          <li>🚗 차량담보대출 (DSR 미적용)</li>
          <li>🏠 부동산 담보대출</li>
          <li>💳 신용대출</li>
        </ul>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">상담후기</h2>
        <div className="space-y-2">
          <p>"빠르고 친절한 상담 감사합니다!" - 김OO</p>
          <p>"신용대출 고민 해결했어요." - 이OO</p>
        </div>
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">상담신청</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="이름" className="w-full border p-2 rounded" />
          <input type="tel" placeholder="연락처" className="w-full border p-2 rounded" />
          <textarea placeholder="문의 내용" className="w-full border p-2 rounded h-32"></textarea>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">상담 신청</button>
        </form>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-2">※ 유의사항</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>본 상담은 무료로 진행되며, 고객 정보는 철저히 보호됩니다.</li>
          <li>대출 가능 여부는 상담 후 결정됩니다.</li>
        </ul>
      </section>

      <footer className="bg-gray-200 text-center p-4 text-sm">
        상담문의: 010-7619-XXXX | 이메일: iksu222@naver.com
      </footer>
    </main>
  );
}
