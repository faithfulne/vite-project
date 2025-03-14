import {Helmet} from 'react-helmet';
import {Text,Button, Input, Img, Heading} from "../../components";
import React from 'react';

export default function Frame2087329292page() {
    return (
        <>
        <Helmet>
            <title></title>
            <meta name='description' content='web site creation using create-react-app'></meta>
        </Helmet>
        <div className='h-[832px] w-full bg-[#ffffff] bg-[url(/public/images/img_group_15.png)] bg-cover bg-no-repeat md:h-auto'>
           <div className='h-[832px] bg-[url(/public/images/img_component_69.png)] bg-cover bg-no-repeat md:h-auto'>
             <div className='flex items-start justify-center md:flex-col'>
               <div className='mt-[60px] flex w-[50%] flex-col gap-12 md:w-full md:px-5'>
                <div className='relative h-[432px]'>
                    <img
                    src='images/img_portrait_divers_272x486.png'
                    alt='Portraitdivers'
                    className='absolute bottom-[-0.98px] left-0 m-auto h-[272px] w-[76%] rounded-tl-[42px] object-contain'
                     />
                    <img
                    src='images/img_portrait_divers_210x378.png'
                    alt='Portraitdivers'
                    className='absolute right-[11%] top-0 m-auto h-[210px] w-[66%] rounded-[42px] object-contain' 
                    />
                </div>
                <div className='flex flex-col items-start gap-6' >
                    <Heading
                       size="heading6xl"
                       as="h1"
                       className= "w-[94%] text-[44px] font-semibold leading-[51px] tracking-[-0.71px] !text-[#7171c1] md:text-[40px] sm:text-[34px]"
                       >
                        Empower Women, Transform Workplaces{""}
                       </Heading>
                       <Text as="p" className="w-[88%] text-[14px font-normal leading-5 !text-[#3a3a3a] md:w-full">
                        Welcome to BW2CLUB, a global community that empowers women and girls and partners with companies to
                        create inclusive spaces for persornal growth, professional success, and meaningful connections.");                        
                       </Text>
                </div>
               </div>
                <div className='flex w-[44%] flex-col items-end self-center md:w-full md:px-5'> 
                    <div className='flex w-[92%] flex-col items-center gap-[62px] overflow-x-scroll bg-[#ffffff] px-12 py-[58px] shadow-[-4px_0_20px_0_#00000019] md:p-5 sm:gap-[31px]'>
                        <div className='relative h-[122px] w-[28%] content-center md:h-auto'>
                        <div className='h-[110px] w-[110px] rounded-[54px] bg-[#7171c1]'/>
                        <img
                        src='images/img_new_logo_02_1.png'
                        alt='Newlogo02one'
                        className='absolute bottom-0 left-0 right-0 top-0 m-auto h-[122px] w-full flex-1 object-cover'
                        />
                    </div>
                    <div className='mb-[90px] flex flex-col items-start gap-12 self-stretch'>
                        <a href='#' className='ml-[18px] md:ml-0 md:text-[40px] sm:text-[34px] '>
                            <Heading
                            size="display_text"
                            as="h2"
                            className="text-[44px] font-semibold tracking-[-0.70px] !text-[#000000] "
                            >
                                Sign up
                            </Heading>
                        </a>
                        <div className='flex flex-col gap-0 self-stretch'>
                            <div className='flex flex-col gap-[26px]'>
                                <div className='flex flex-col gap-5'>
                                    <input
                                    color='black_900_19'
                                    size='2xl'
                                    variant ='outline'
                                    type='email'
                                    name='email'
                                    placeholder={'Email address*'}
                                    className='rounded-[12px] !border px-3'
                                    />
                                    <div className='flex flex-col gap-3'>
                                        <input
                                        color='black_900_19'
                                        size='2xl'
                                        variant='outline'
                                        type='password'
                                        name='password'
                                        placeholder={'Password'}
                                        suffix={
                                            <img
                                            src='images/img_eye_1.svg'
                                            alt='Eye 1'
                                            className='h-[20px] w-[24px] object-contain'
                                            />
                                        }
                                        className='gap-4 self-stretch rounded-[12px] !border px-3.5'
                                        />
                                        <Input
                                           color="black_900_19"
                                           size="2xl"
                                           variant="outline"
                                           type="password"
                                           name="confirmpassword"
                                           placeholder={`Confirm Password`}
                                           suffix={
                                            <Img
                                            src="images/img_eye_1.svg"
                                            alt="Eye 1"
                                            className="h-[20px] w-[24px] object-contain"
                                            />
                                           }
                                           className="gap-4 rounded-[12px] !border px-3.5"
                                           />
                                        </div>
                                    </div>
                                    <Button
                                    className='log_in_border self-stretch rounded-lg bg-gradient-to-b from-[#8585d566] to-[#6767b766] px-[33px] text-[#ffffff] shadow-[insect_0_-3px_1px_0_#00000019] sm:px-5'
                                    size='7xl'
                                    variant={null}
                                    >
                                        Sign up
                                    </Button>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-[22px]'>
                                    <Text as='p' className='text-[14px] font-normal !text-[#7171c1]'>
                                        Already have an account? Log in 
                                    </Text>
                                    <Text as='p' className='text-[14px] font-normal !text-[#212121]'>
                                        <span className='text-[#7171c1]'>Privacy Policy</span>
                                        <span className='text[#212121]'>&nbsp;|&nbsp;</span>
                                        <span className='text-[#7171c1]'>Terms and conditions</span>
                                        <span className='text[#212121]'>&nbsp;|&nbsp;</span>
                                        <span className='text-[#7171c1]'>Contact us</span>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>
        </div>
        </>
    );
}