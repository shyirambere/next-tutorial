import prisma from "@/utils/db"

const prismaHandlers = async () => {
  console.log('prisma-example');
  //await prisma.task.create({
    //data:{
      //content: 'wake up',
    //},
  //});
  const allTasks = await prisma.task.findMany({
    orderBy:{
      content:'desc',
    },
  });
  return allTasks;
};


const PrismaPage = async () => {
  const tasks = await prismaHandlers();

  if(tasks.length === 0){
    return <h2 className="mt-b font-medium text-lg">No tasks to show...</h2>
  }
  return (
    <div>
      <h1 className="text-7xl">Prisma adventure</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        )
      })}
    </div>
  )
}

export default PrismaPage