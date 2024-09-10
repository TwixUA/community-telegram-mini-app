import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg && tg.initDataUnsafe?.user) {
      const userData = tg.initDataUnsafe.user;
      setUser(userData); // Зберігаємо дані користувача в стані
    } else {
      // Фіктивні дані для тестування поза Telegram
      setUser({
        first_name: "Світлана",
        last_name: "Дарієнко",
        username: "milaschka",
      });
    }
  }, []);

  if (!user) {
    return <div>Завантаження даних користувача...</div>;
  }

  return (
    <div class="self-stretch h-[696px] flex-col justify-start items-start gap-[59px] inline-flex">
      <div class="self-stretch h-[268px] flex-col justify-start items-center gap-4 flex">
        <div class="flex-col justify-start items-center gap-2 flex">
          <div class="w-[108px] h-[108px] bg-gradient-to-br from-[#ad00ff] to-[#ff003d] rounded-full"></div>
          <div class="flex-col justify-center items-center gap-1 flex">
            <div class="text-white text-2xl font-semibold font-['Inter']">
              {user.first_name} {user.last_name}
            </div>
            <div class="text-[#8d8d93] text-xs font-semibold font-['Inter']">
              @{user.username}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center items-start gap-2 inline-flex">
          <div class="px-4 py-[11px] bg-neutral-950 rounded-[37px] border border-[#adff00] justify-center items-center gap-2.5 flex">
            <div class="text-white text-sm font-semibold font-['Inter'] leading-[14px]">
              Product Manager
            </div>
          </div>
          <div class="px-4 py-[11px] bg-neutral-950 rounded-[37px] border border-[#242424] justify-center items-center gap-2.5 flex">
            <div class="text-white text-sm font-semibold font-['Inter'] leading-[14px]">
              Product Manager
            </div>
          </div>
          <div class="px-4 py-[11px] bg-neutral-950 rounded-[37px] border border-[#242424] justify-center items-center gap-2.5 flex">
            <div class="text-white text-sm font-semibold font-['Inter'] leading-[14px]">
              Warsaw
            </div>
          </div>
          <div class="px-4 py-[11px] bg-neutral-950 rounded-[37px] border border-[#242424] justify-center items-center gap-2.5 flex">
            <div class="text-white text-sm font-semibold font-['Inter'] leading-[14px]">
              Airsoft
            </div>
          </div>
          <div class="px-4 py-[11px] bg-neutral-950 rounded-[37px] border border-[#242424] justify-center items-center gap-2.5 flex">
            <div class="text-white text-sm font-semibold font-['Inter'] leading-[14px]">
              Hiking
            </div>
          </div>
          <div class="pl-2 pr-4 py-1.5 bg-white rounded-[37px] border border-[#242424] justify-center items-center gap-2.5 flex">
            <div class="w-[22px] h-[22px] relative">
              <div class="w-[22px] h-[22px] left-0 top-0 absolute bg-neutral-950 rounded-full"></div>
            </div>
            <div class="text-black text-sm font-semibold font-['Inter'] leading-[14px]">
              Add personal tag
            </div>
          </div>
        </div>
      </div>
      <div class="self-stretch h-[369px] flex-col justify-start items-start gap-6 flex">
        <div class="self-stretch h-[127px] flex-col justify-start items-start gap-2 flex">
          <div class="self-stretch h-[79px] justify-start items-center gap-2 inline-flex">
            <div class="grow shrink basis-0 self-stretch p-3 bg-neutral-950 rounded-xl border border-[#242424] justify-center items-center gap-3 flex">
              <div class="flex-col justify-center items-start gap-1 inline-flex">
                <div class="self-stretch text-center text-white text-xl font-semibold font-['Inter']">
                  11
                </div>
                <div class="self-stretch text-center text-[#a1a1a1] text-xs font-medium font-['Inter']">
                  Events
                  <br />
                  registered
                </div>
              </div>
            </div>
            <div class="grow shrink basis-0 self-stretch p-3 bg-neutral-950 rounded-xl border border-[#242424] justify-center items-center gap-3 flex">
              <div class="flex-col justify-center items-start gap-1 inline-flex">
                <div class="self-stretch text-center text-white text-xl font-semibold font-['Inter']">
                  8
                </div>
                <div class="self-stretch text-center text-[#a1a1a1] text-xs font-medium font-['Inter']">
                  Events
                  <br />
                  visited
                </div>
              </div>
            </div>
            <div class="grow shrink basis-0 self-stretch p-3 bg-neutral-950 rounded-xl border border-[#242424] justify-center items-center gap-3 flex">
              <div class="grow shrink basis-0 h-[59px] flex-col justify-center items-center gap-1 inline-flex">
                <div class="self-stretch text-center text-[#adff00] text-xl font-semibold font-['Inter']">
                  84%
                </div>
                <div class="text-center text-[#a1a1a1] text-xs font-medium font-['Inter']">
                  Team events <br />
                  attendance
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch h-10 px-3 py-[11px] bg-white rounded justify-between items-center inline-flex">
            <div class="text-black text-sm font-semibold font-['Inter'] leading-[14px]">
              ✈️ Send message
            </div>
          </div>
        </div>
        <div class="self-stretch h-[99px] flex-col justify-start items-start gap-2 flex">
          <div class="self-stretch text-white text-base font-semibold font-['Inter']">
            About
          </div>
          <div class="self-stretch grow shrink basis-0 text-[#8d8d93] text-xs font-semibold font-['Inter'] leading-[18px]">
            ⚡ Founder & Capitan of of airsoft/milsim team <br />
            📍 Located in Warsaw, Poland. <br />
            🤝 If you want join our team, please DM me in Telegram. <br />
            📆 Playing airsoft since 2018 (6 years)
          </div>
        </div>
        <div class="self-stretch h-[95px] flex-col justify-start items-start gap-2 flex">
          <div class="self-stretch text-white text-base font-semibold font-['Inter']">
            Last visited events
          </div>
          <div class="self-stretch p-3 rounded-xl border-2 border-[#121212] justify-between items-center inline-flex">
            <div class="self-stretch justify-start items-center gap-3 flex">
              <div class="w-11 h-11 relative">
                <div class="w-11 h-11 left-0 top-0 absolute bg-[#531b18] rounded-lg"></div>
                <div class="w-[23.05px] h-[30.04px] left-[9.62px] top-[7.56px] absolute"></div>
              </div>
              <div class="self-stretch flex-col justify-center items-start gap-1 inline-flex">
                <div class="flex-col justify-start items-start flex">
                  <div class="self-stretch text-white text-base font-semibold font-['Inter']">
                    Sparta
                  </div>
                  <div class="self-stretch text-[#8d8d93] text-xs font-semibold font-['Inter']">
                    Warsaw, Poland
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[39px] text-center text-white text-2xl font-semibold font-['Inter'] uppercase">
              -&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
