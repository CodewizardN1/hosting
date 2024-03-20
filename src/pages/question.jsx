import React from 'react'

export const Question = () => {
  return (
    <div className='w-[100%] 2xl:h-[62vh] base:h-[61.9vh] bg-[#000] lg:pt-[80px] 2xl:pt-[50px] base:pt-8'>
        <div className='xl:w-[80%] base:w-[90%] m-auto'>
            <h1 className='text-white text-[24px] font-bold text-center pb-5'>Частые вопросы</h1>
        <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium text-white">
    Почему мой сервер находится в статусе "Suspended"?
    </div>
    <div className="collapse-content text-white"> 
      <p>Вероятно всего вы нарушили правила использоваться и/или превысили ресурсы, выше заданных. Если статус содержит сообщение обратитесь в техническую поддержку.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium text-white">
    Почему у моего сервера бесконечная загрузка?
    </div>
    <div className="collapse-content text-white"> 
      <p>Вероятно всего вы нарушили правила использоваться и/или превысили ресурсы, выше заданных. Если статус содержит сообщение обратитесь в техническую поддержку.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium text-white">
      Почему при запуске сервера у меня летит консоль?
    </div>
    <div className="collapse-content text-white"> 
      <p>Вероятно всего вы нарушили правила использоваться и/или превысили ресурсы, выше заданных. Если статус содержит сообщение обратитесь в техническую поддержку.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium text-white">
    Как узнать пароль?
    </div>
    <div className="collapse-content text-white"> 
      <p>Вероятно всего вы нарушили правила использоваться и/или превысили ресурсы, выше заданных. Если статус содержит сообщение обратитесь в техническую поддержку.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium text-white">
    Что делать, если я забыл пароль?
    </div>
    <div className="collapse-content text-white"> 
      <p>Вероятно всего вы нарушили правила использоваться и/или превысили ресурсы, выше заданных. Если статус содержит сообщение обратитесь в техническую поддержку.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium text-white">
    Как загрузить сборку на хостинг?
    </div>
    <div className="collapse-content text-white"> 
      <p>Вероятно всего вы нарушили правила использоваться и/или превысили ресурсы, выше заданных. Если статус содержит сообщение обратитесь в техническую поддержку.</p>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}
