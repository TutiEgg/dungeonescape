namespace Dungeon {
    import ƒAid = FudgeAid;
    

    export class EnemyStateMachine extends ƒAid.ComponentStateMachine<EnemyState> {
        public static readonly iSubclass: number = ƒ.Component.registerSubclass(EnemyStateMachine);
        private static instructions: ƒAid.StateMachineInstructions<EnemyState> = EnemyStateMachine.setupStateMachine();
    
        public constructor() {
          super();
          this.instructions = EnemyStateMachine.instructions;
        }
    
        private static setupStateMachine(): ƒAid.StateMachineInstructions<EnemyState> {
          let setup: ƒAid.StateMachineInstructions<EnemyState> = new ƒAid.StateMachineInstructions();

          setup.transitDefault = EnemyStateMachine.transitDefault;
          setup.actDefault = EnemyStateMachine.actDefault;
          setup.setAction(EnemyState.IDLE, <ƒ.General>this.actIdle);
          setup.setAction(EnemyState.PATROL, <ƒ.General>this.actPatrol);
          setup.setAction(EnemyState.ATTACK, <ƒ.General>this.actAttack);

          return setup;
        }


        private static transitDefault(_machine: EnemyStateMachine): void {
          console.log("Transit to", _machine.stateNext);
        }
    
        private static async actDefault(_machine: EnemyStateMachine): Promise<void> {
          console.log(EnemyState[_machine.stateCurrent]);
        }
    
        private static async actIdle(_machine: EnemyStateMachine): Promise<void> {
          // Cant Happen, otherwise the enemy is stuck in place
          console.log("ENEMY Idle")
          
        }
        
        private static async actPatrol(_machine: EnemyStateMachine): Promise<void> {
          let enemy_node : ƒ.Node;
          enemy_node  = _machine.node
          
          // Shows Error. Convert enemy_node to type of Enemy ?
          enemy_node.move(deltaTime);
          
         
          
        }

        private static async actAttack(_machine: EnemyStateMachine): Promise<void> {
          //let container: Enemy = <Enemy>(<ƒAid.ComponentStateMachine<EnemyState>>_machine).getContainer();
          //let container: Enemy = <Enemy>(_machine).getContainer;
          let enemy_node : ƒ.Node;
          enemy_node  = _machine.node
          enemy_node.attack()


          
         
          
        }

        
      }


}